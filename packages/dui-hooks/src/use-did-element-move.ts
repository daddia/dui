import { useRef } from 'react';
import { useIsoMorphicEffect } from './use-iso-morphic-effect';

export function useDidElementMove(enabled: boolean, element: HTMLElement | null) {
  const elementPosition = useRef({ left: 0, top: 0 });

  useIsoMorphicEffect(() => {
    if (!element) return;

    const DOMRect = element.getBoundingClientRect();
    if (DOMRect) elementPosition.current = DOMRect;
  }, [enabled, element]);

  if (element == null) return false;
  if (!enabled) return false;
  if (element === document.activeElement) return false;

  const buttonRect = element.getBoundingClientRect();

  const didElementMove =
    buttonRect.top !== elementPosition.current.top ||
    buttonRect.left !== elementPosition.current.left;

  return didElementMove;
}
