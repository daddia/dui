import { useMemo, useReducer } from 'react';
import { useIsoMorphicEffect } from './use-iso-morphic-effect';

function computeSize(element: HTMLElement | null) {
  if (element === null) return { width: 0, height: 0 };
  const { width, height } = element.getBoundingClientRect();
  return { width, height };
}

export function useElementSize(element: HTMLElement | null, unit = false) {
  const [identity, forceRerender] = useReducer(() => ({}), {});

  // When the element changes during a re-render, we want to make sure we
  // compute the correct size as soon as possible.
  const size = useMemo(() => computeSize(element), [element]);

  // We still need to track identity for the resize observer to trigger
  // updates when the element size changes
  useIsoMorphicEffect(() => {
    if (!element) return;

    // Trigger a re-render whenever the element resizes
    const observer = new ResizeObserver(() => {
      // When the element resizes, force a rerender to recompute the size
      forceRerender();
    });
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element]);

  if (unit) {
    return {
      width: `${size.width}px`,
      height: `${size.height}px`,
    };
  }

  return size;
}
