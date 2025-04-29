import { useRef } from 'react';
import { useDocumentEvent } from './use-document-event';

// Helper function to check if a value is a Node
function isNode(value: unknown): value is Node {
  return value instanceof Node;
}

// Helper function to check if a value is an HTML or SVG element
function isHTMLorSVGElement(value: unknown): value is HTMLElement | SVGElement {
  return value instanceof Element;
}

enum ActionKind {
  Ignore,
  Select,
  Close,
}

export const Action = {
  /** Do nothing */
  Ignore: { kind: ActionKind.Ignore } as const,

  /** Select the current item */
  Select: (target: HTMLElement) => ({ kind: ActionKind.Select, target }) as const,

  /** Close the dropdown */
  Close: { kind: ActionKind.Close } as const,
};

// If the time difference between pointerdown and pointerup is less than this,
// it is very likely a normal click, and nothing special should happen.
//
// Once we reach this threshold, we assume the user is trying to select an item
// in the dropdown, and we should close the dropdown after the click.
//
// Pointerdown -> drag over an item -> pointer up -> "click" on the item
const POINTER_HOLD_THRESHOLD = 200;

type PointerEventWithTarget = Exclude<PointerEvent, 'target'> & {
  target: HTMLElement;
};

export function useQuickRelease(
  enabled: boolean,
  {
    trigger,
    action,
    close,
    select,
  }: {
    trigger: HTMLElement | null;
    action: (
      e: PointerEventWithTarget,
    ) =>
      | { kind: ActionKind.Ignore }
      | { kind: ActionKind.Select; target: HTMLElement }
      | { kind: ActionKind.Close };
    close: () => void;
    select: (target: HTMLElement) => void;
  },
) {
  // Capture the timestamp of when the `pointerdown` event happened on the
  // trigger.
  const triggeredAtRef = useRef<Date | null>(null);
  useDocumentEvent(enabled && trigger !== null, 'pointerdown', (e) => {
    if (!isNode(e?.target)) return;
    if (!trigger || !e.target || !(trigger instanceof Node) || !trigger.contains(e.target as Node))
      return;

    triggeredAtRef.current = new Date();
  });

  useDocumentEvent(
    enabled && trigger !== null,
    'pointerup',
    (e) => {
      if (triggeredAtRef.current === null) return;
      if (!isHTMLorSVGElement(e.target)) return;

      const result = action(e as PointerEventWithTarget);

      const diffInMs = new Date().getTime() - triggeredAtRef.current.getTime();
      triggeredAtRef.current = null;

      switch (result.kind) {
        case ActionKind.Ignore:
          return;

        case ActionKind.Select: {
          if (diffInMs > POINTER_HOLD_THRESHOLD) {
            select(result.target);
            close();
          }
          break;
        }

        case ActionKind.Close: {
          close();
          break;
        }
      }
    },
    { capture: true },
  );
}
