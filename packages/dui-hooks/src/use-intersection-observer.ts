import { useState, useEffect } from 'react';

/**
 * Hook to observe when an element intersects with the viewport or a specified root element
 *
 * @param elementRef - React ref object for the element to observe
 * @param options - IntersectionObserver options (root, rootMargin, threshold)
 * @returns The intersection observer entry or null
 */
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options?: IntersectionObserverInit,
): IntersectionObserverEntry | null {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry) {
        setEntry(firstEntry);
      }
    }, options);

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [elementRef, options]);

  return entry;
}
