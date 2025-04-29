import { useRef, useState } from 'react';
import { disposables } from '@dui/utils';
import { useEvent } from './use-event';
import { useIsoMorphicEffect } from './use-iso-morphic-effect';
import { useLatestValue } from './use-latest-value';

/**
 * This is a simplified version of the `useTransition` hook that's implemented
 * in React 18. We're not using all of the features of the React 18 version, and
 * in this simplified version we're only concerned with delaying the function call
 * until after the next painting tick.
 */
function useTransition() {
  const [pending, setPending] = useState(false);
  const transitionFn = useEvent((callback: () => void) => {
    setPending(true);

    // Wait until the next painting tick
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setPending(false);
        callback();
      });
    });
  });

  return [pending, transitionFn] as const;
}

/**
 * Transition helpers for each type of state. These used to be full React
 * components, but they're now functions that take a `ref` to the element and
 * synchronizes the state based on the events. This allows us to avoid
 * unnecessary re-renders and simplifies the API considerably, specifically in
 * framework components.
 */
export function useTransitionAuto({
  container,
  immediate,
  onStart,
  onStop,
  enterDuration = 150,
  leaveDuration = 150,
  property = 'opacity',
}: {
  onStart?: () => void;
  onStop?: () => void;
  container: React.RefObject<HTMLElement | null>;
  immediate?: boolean;
  enterDuration?: number;
  leaveDuration?: number;
  property?: string;
}) {
  // We use a lightweight implementation in tests, since we don't actually
  // measure anything correctly in JSDOM anyway. This is better than relying on
  // timers, and it's more predictable.
  const isDuration0InTest = enterDuration === 0 || leaveDuration === 0;
  const skipAnimation =
    typeof process !== 'undefined' &&
    process?.env?.['NODE' + '_' + 'ENV'] === 'test' &&
    isDuration0InTest;

  const [stage, setStage] = useState<'enter' | 'leave' | 'idle' | 'entering' | 'leaving'>('idle');
  const [isTransitioning, startTransition] = useTransition();

  const animationRef = useRef<number | null>(null);
  const enterStart = useRef<number | null>(null);
  const leaveStart = useRef<number | null>(null);

  // Stable callbacks that we'll call when a transition starts or ends.
  const onStartRef = useLatestValue(onStart);
  const onStopRef = useLatestValue(onStop);

  const forcedTransitionDuration = immediate
    ? '0ms'
    : `${stage === 'enter' || stage === 'entering' ? enterDuration : leaveDuration}ms`;

  // This will setup event listeners for transitionend, but also will handle the
  // case where the children inside the container change and we need to re-measure
  // the container. It's one of the rare cases where we rely on `useLayoutEffect`
  // or in this case `useIsoMorphicEffect`.
  useIsoMorphicEffect(() => {
    // Don't do anything until we have a container
    if (!container.current) return;

    const node = container.current;
    const d = disposables();

    d.add(() => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    });

    // This is a helper function to set CSS Custom Properties on the container
    const css = (stage: string, skipTransition = false) => {
      if (!node) return;

      const enterFactor = stage === 'enter' ? 1 : 0;
      const leaveFactor = stage === 'leave' ? 1 : 0;
      const duration = skipTransition ? '0ms' : forcedTransitionDuration;

      // Transition properties
      node.style.setProperty('--dui-enter-factor', String(enterFactor));
      node.style.setProperty('--dui-leave-factor', String(leaveFactor));
      node.style.setProperty('--dui-transition-duration', duration);

      node.style.setProperty('transition-property', property);
      node.style.setProperty('transition-duration', duration);
      node.style.setProperty('transition-timing-function', 'cubic-bezier(0.4, 0, 0.2, 1)');
    };

    if (stage === 'entering') {
      if (skipAnimation) {
        onStopRef.current?.();
        setStage('enter');
        return;
      }

      onStartRef.current?.();

      // Reset dui factor for entering animation
      css('enter', true);

      enterStart.current = performance.now();

      // We wait for the next animation frame to ensure that the browser has
      // time to paint.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // We want to handle the case where we might need to measure the
          // element, which requires it to be visible. In that scenario,
          // we don't want to transition right away because the browser
          // doesn't know the proper size.

          node.style.willChange = 'contents';

          // Transition from 0 to 1
          css('enter');

          function handleTransition() {
            const timeSpent = enterStart.current
              ? performance.now() - enterStart.current
              : leaveDuration;

            // Reset the leave state
            enterStart.current = null;

            // If we almost finish the duration then we'll just finish up, to
            // avoid flickers when it's a few ms off.
            if (timeSpent < enterDuration - 16) {
              return;
            }

            node.removeEventListener('transitionend', handleTransition);
            node.removeEventListener('transitioncancel', handleCancel);

            setStage('enter');
            onStopRef.current?.();
          }

          function handleCancel() {
            node.removeEventListener('transitionend', handleTransition);
            node.removeEventListener('transitioncancel', handleCancel);
          }

          node.addEventListener('transitioncancel', handleCancel);
          node.addEventListener('transitionend', handleTransition);
        });
      });
    } else if (stage === 'leaving') {
      if (skipAnimation) {
        onStopRef.current?.();
        setStage('leave');
        return;
      }

      onStartRef.current?.();

      leaveStart.current = performance.now();

      // We wait for the next animation frame to ensure that the browser has
      // time to paint.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // We want to handle the case where we might need to measure the
          // element, which requires it to be visible. In that scenario,
          // we don't want to transition right away because the browser
          // doesn't know the proper size.

          node.style.willChange = 'contents';

          // Make sure there is a transition for the leaves
          css('leave');

          function handleTransition() {
            const timeSpent = leaveStart.current
              ? performance.now() - leaveStart.current
              : leaveDuration;

            // Reset the leave state
            leaveStart.current = null;

            // If we almost finish the duration then we'll just finish up, to
            // avoid flickers when it's a few ms off.
            if (timeSpent < leaveDuration - 16) {
              return;
            }

            node.removeEventListener('transitionend', handleTransition);
            node.removeEventListener('transitioncancel', handleCancel);

            onStopRef.current?.();
            setStage('leave');
          }

          function handleCancel() {
            node.removeEventListener('transitionend', handleTransition);
            node.removeEventListener('transitioncancel', handleCancel);
          }

          node.addEventListener('transitionend', handleTransition);
          node.addEventListener('transitioncancel', handleCancel);
        });
      });
    }

    return () => d.dispose();
  }, [
    stage,
    skipAnimation,
    container,
    forcedTransitionDuration,
    onStartRef,
    onStopRef,
    enterDuration,
    leaveDuration,
    property,
  ]);

  // Helper functions to trigger the enter and leave transitions, but delayed by
  // a transition frame so that they queue up properly if you trigger them both
  // right after each other.
  const show = useEvent(() => {
    startTransition(() => {
      if (stage === 'enter' || stage === 'entering') return;
      setStage('entering');
    });
  });

  const hide = useEvent(() => {
    startTransition(() => {
      if (stage === 'leave' || stage === 'leaving') return;
      setStage('leaving');
    });
  });

  const toggle = useEvent((on: boolean) => {
    if (on) show();
    else hide();
  });

  const addClass = useEvent((className: string) => {
    container.current?.classList.add(className);
  });

  const removeClass = useEvent((className: string) => {
    container.current?.classList.remove(className);
  });

  return {
    stage,
    isTransitioning,
    show,
    hide,
    toggle,
    addClass,
    removeClass,
  };
}
