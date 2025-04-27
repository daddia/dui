import { useRef, type MutableRefObject } from 'react';
import { getTextValue } from '../utils/get-text-value';
import { useEvent } from './use-event';

export function useTextValue(element: MutableRefObject<HTMLElement | null>) {
  const cacheKey = useRef<string>('');
  const cacheValue = useRef<string>('');

  return useEvent(() => {
    const el = element.current;
    if (!el) return '';

    // Check for a cached version
    const currentKey = el.innerText;
    if (cacheKey.current === currentKey) {
      return cacheValue.current;
    }

    // Calculate the value
    const value = getTextValue(el).trim().toLowerCase();
    cacheKey.current = currentKey;
    cacheValue.current = value;
    return value;
  });
}
