import { useEffect } from 'react';
import { disposables } from '@dui/utils';

export function useDocumentOverflowLockedEffect(
  locked = false,
  options: { documentElement?: HTMLElement } = {},
) {
  useEffect(() => {
    if (!locked) return;

    const documentElement = options.documentElement ?? document.documentElement;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    const cleanup = disposables();

    if (scrollbarWidth > 0) {
      const originalPadding = documentElement.style.paddingRight;
      const originalOverflow = documentElement.style.overflow;

      documentElement.style.paddingRight = `${scrollbarWidth}px`;
      documentElement.style.overflow = 'hidden';

      cleanup.add(() => {
        documentElement.style.paddingRight = originalPadding;
        documentElement.style.overflow = originalOverflow;
      });
    }

    return cleanup.dispose;
  }, [locked, options.documentElement]);
}
