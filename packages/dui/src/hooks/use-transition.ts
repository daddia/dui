import { useRef, useState, type MutableRefObject } from 'react';
import { disposables } from '../utils/disposables';
import { useDisposables } from './use-disposables';
import { useFlags } from './use-flags';
import { useIsoMorphicEffect } from './use-iso-morphic-effect';

/**
 * Transition states used internally by the useTransition hook
 * ```
 * ┌──────┐                │        ┌──────────────┐
 * │Closed│                │        │Closed        │
 * └──────┘                │        └──────────────┘
 * ┌──────┐┌──────┐┌──────┐│┌──────┐┌──────┐┌──────┐
 * │Frame ││Frame ││Frame │││Frame ││Frame ││Frame │
 * └──────┘└──────┘└──────┘│└──────┘└──────┘└──────┘
 * ┌──────────────────────┐│┌──────────────────────┐
 * │Enter                 │││Leave                 │
 * └──────────────────────┘│└──────────────────────┘
 * ┌──────────────────────┐│┌──────────────────────┐
 * │Transition            │││Transition            │
 * ├──────────────────────┘│└──────────────────────┘
 * │
 * └─ Applied when `Enter` or `Leave` is applied.
 * ```
 */
enum TransitionState {
  None = 0,
  Closed = 1 << 0,
  Enter = 1 << 1,
  Leave = 1 << 2,
}

/**
 * Data object returned by the useTransition hook
 */
export type TransitionData = {
  closed?: boolean;
  enter?: boolean;
  leave?: boolean;
  transition?: boolean;
};

/**
 * Sets up a polyfill for Element.prototype.getAnimations in test environments
 * This is needed for JSDOM which doesn't implement the Web Animations API
 */
function setupAnimationsPolyfill() {
  if (
    typeof process !== 'undefined' &&
    typeof globalThis !== 'undefined' &&
    typeof Element !== 'undefined' &&
    // String concatenation prevents esbuild from replacing process.env.NODE_ENV
    process?.env?.['NODE' + '_' + 'ENV'] === 'test'
  ) {
    if (typeof Element?.prototype?.getAnimations === 'undefined') {
      Element.prototype.getAnimations = function getAnimationsPolyfill() {
        console.warn(
          [
            'DUI has polyfilled `Element.prototype.getAnimations` for your tests.',
            'Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.',
            '',
            'Example usage:',
            '```js',
            "import { mockAnimationsApi } from 'jsdom-testing-mocks'",
            'mockAnimationsApi()',
            '```',
          ].join('\n'),
        );
        return [];
      };
    }
  }
}

// Initialize polyfill
setupAnimationsPolyfill();

/**
 * Prepares an element for transition
 *
 * @param node - Element to prepare
 * @param options - Preparation options
 */
function prepareTransition(
  node: HTMLElement,
  { inFlight, prepare }: { inFlight?: MutableRefObject<boolean>; prepare: () => void },
) {
  // If we are already transitioning, then we don't need to force cancel the
  // current transition (by triggering a reflow).
  if (inFlight?.current) {
    prepare();
    return;
  }

  const previous = node.style.transition;

  // Force cancel current transition
  node.style.transition = 'none';

  prepare();

  // Trigger a reflow, flushing the CSS changes
  node.offsetHeight;

  // Reset the transition to what it was before
  node.style.transition = previous;
}

/**
 * Waits for CSS transitions to complete
 *
 * @param node - Element with transitions
 * @param done - Callback when transitions complete
 * @returns Cleanup function
 */
function waitForTransition(node: HTMLElement | null, done: () => void) {
  const d = disposables();
  if (!node) return d.dispose;

  let cancelled = false;
  d.add(() => {
    cancelled = true;
  });

  const transitions =
    node.getAnimations?.().filter((animation) => animation instanceof CSSTransition) ?? [];
  // If there are no transitions, we can stop early.
  if (transitions.length === 0) {
    done();
    return d.dispose;
  }

  // Wait for all the transitions to complete.
  Promise.allSettled(transitions.map((transition) => transition.finished)).then(() => {
    if (!cancelled) {
      done();
    }
  });

  return d.dispose;
}

/**
 * Manages an element's transition
 *
 * @param node - Element to transition
 * @param options - Transition options and callbacks
 * @returns Cleanup function
 */
function transition(
  node: HTMLElement,
  {
    prepare,
    run,
    done,
    inFlight,
  }: {
    prepare: () => void;
    run: () => void;
    done: () => void;
    inFlight: MutableRefObject<boolean>;
  },
) {
  const d = disposables();

  // Prepare the transitions by ensuring that all the "before" classes are
  // applied and flushed to the DOM.
  prepareTransition(node, {
    prepare,
    inFlight,
  });

  // This is a workaround for a bug in all major browsers.
  //
  // 1. When an element is just mounted
  // 2. And you apply a transition to it (e.g.: via a class)
  // 3. And you're using `getComputedStyle` and read any returned value
  // 4. Then the `transition` immediately jumps to the end state
  //
  // This means that no transition happens at all. To fix this, we delay the
  // actual transition by one frame.
  d.nextFrame(() => {
    // Initiate the transition by applying the new classes.
    run();

    // Wait for the transition, once the transition is complete we can cleanup.
    // We wait for a frame such that the browser has time to flush the changes
    // to the DOM.
    d.requestAnimationFrame(() => {
      d.add(waitForTransition(node, done));
    });
  });

  return d.dispose;
}

/**
 * Converts transition data to data attributes for use in CSS
 *
 * @param data - Transition data object
 * @returns Object with data attributes
 */
export function transitionDataAttributes(data: TransitionData) {
  const attributes: Record<string, string> = {};
  for (const key in data) {
    if (data[key as keyof TransitionData] === true) {
      attributes[`data-${key}`] = '';
    }
  }
  return attributes;
}

/**
 * Hook for managing CSS transitions on elements
 *
 * @param enabled - Whether the transition is enabled
 * @param element - The DOM element to transition
 * @param show - Whether to show or hide the element
 * @param events - Optional event callbacks
 * @returns A tuple with visibility state and transition data attributes
 */
export function useTransition(
  enabled: boolean,
  element: HTMLElement | null,
  show: boolean,
  events?: {
    start?(show: boolean): void;
    end?(show: boolean): void;
  },
): [visible: boolean, data: TransitionData] {
  const [visible, setVisible] = useState(show);

  const { hasFlag, addFlag, removeFlag } = useFlags(
    enabled && visible ? TransitionState.Enter | TransitionState.Closed : TransitionState.None,
  );
  const inFlight = useRef(false);
  const cancelledRef = useRef(false);

  const d = useDisposables();

  useIsoMorphicEffect(() => {
    if (!enabled) return;

    if (show) {
      setVisible(true);
    }

    if (!element) {
      if (show) {
        addFlag(TransitionState.Enter | TransitionState.Closed);
      }
      return;
    }

    events?.start?.(show);

    return transition(element, {
      inFlight,
      prepare() {
        if (cancelledRef.current) {
          // Cancelled a cancellation, we're back to the original state.
          cancelledRef.current = false;
        } else {
          // If we were already in-flight, then we want to cancel the current
          // transition.
          cancelledRef.current = inFlight.current;
        }

        inFlight.current = true;

        if (cancelledRef.current) return;

        if (show) {
          addFlag(TransitionState.Enter | TransitionState.Closed);
          removeFlag(TransitionState.Leave);
        } else {
          addFlag(TransitionState.Leave);
          removeFlag(TransitionState.Enter);
        }
      },
      run() {
        if (cancelledRef.current) {
          // If we cancelled a transition, then the `show` state is going to
          // be inverted already, but that doesn't mean we have to go to that
          // new state.
          //
          // What we actually want is to revert to the "idle" state (the
          // stable state where an `Enter` transitions to, and a `Leave`
          // transitions from.)
          if (show) {
            removeFlag(TransitionState.Enter | TransitionState.Closed);
            addFlag(TransitionState.Leave);
          } else {
            removeFlag(TransitionState.Leave);
            addFlag(TransitionState.Enter | TransitionState.Closed);
          }
        } else {
          if (show) {
            removeFlag(TransitionState.Closed);
          } else {
            addFlag(TransitionState.Closed);
          }
        }
      },
      done() {
        if (cancelledRef.current) {
          if (typeof element.getAnimations === 'function' && element.getAnimations().length > 0) {
            return;
          }
        }

        inFlight.current = false;

        removeFlag(TransitionState.Enter | TransitionState.Leave | TransitionState.Closed);

        if (!show) {
          setVisible(false);
        }

        events?.end?.(show);
      },
    });
  }, [enabled, show, element, d]);

  if (!enabled) {
    return [
      show,
      {
        closed: undefined,
        enter: undefined,
        leave: undefined,
        transition: undefined,
      },
    ] as const;
  }

  return [
    visible,
    {
      closed: hasFlag(TransitionState.Closed),
      enter: hasFlag(TransitionState.Enter),
      leave: hasFlag(TransitionState.Leave),
      transition: hasFlag(TransitionState.Enter | TransitionState.Leave),
    },
  ] as const;
}
