import { useEffect, type MutableRefObject } from 'react';
import { disposables } from '@dui/utils';
import { useLatestValue } from './use-latest-value';

// Helper function to check if an element is an HTML element
function isHTMLElement(
  element: HTMLElement | MutableRefObject<HTMLElement | null> | null,
): element is HTMLElement {
  return element !== null && !(element as MutableRefObject<HTMLElement | null>).current;
}

/**
 * A hook to ensure that a callback is called when the element has disappeared
 * from the screen.
 *
 * This can happen if you use Tailwind classes like: `hidden md:block`, once the
 * viewport is smaller than `md` the element will disappear.
 */
export function useOnDisappear(
  enabled: boolean,
  ref: MutableRefObject<HTMLElement | null> | HTMLElement | null,
  cb: () => void,
) {
  const listenerRef = useLatestValue((element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    if (rect.x === 0 && rect.y === 0 && rect.width === 0 && rect.height === 0) {
      cb();
    }
  });

  useEffect(() => {
    if (!enabled) return;

    const element =
      ref === null
        ? null
        : isHTMLElement(ref)
          ? ref
          : (ref as MutableRefObject<HTMLElement | null>).current;
    if (!element) return;

    const d = disposables();

    // Try using ResizeObserver
    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(() => listenerRef.current(element!));
      observer.observe(element);
      d.add(() => observer.disconnect());
    }

    // Try using IntersectionObserver
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(() => listenerRef.current(element!));
      observer.observe(element);
      d.add(() => observer.disconnect());
    }

    return () => d.dispose();
  }, [ref, listenerRef, enabled]);
}
