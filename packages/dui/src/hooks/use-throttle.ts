import { useEffect, useRef, useState } from 'react';

/**
 * Hook to throttle a value
 *
 * @param value - The value to throttle
 * @param limit - The time limit in milliseconds
 * @returns The throttled value
 */
export function useThrottle<T>(value: T, limit: number = 200): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastUpdated = useRef<number>(Date.now());

  useEffect(() => {
    const now = Date.now();
    const elapsed = now - lastUpdated.current;

    if (elapsed >= limit) {
      setThrottledValue(value);
      lastUpdated.current = now;
    } else {
      const timerId = setTimeout(() => {
        setThrottledValue(value);
        lastUpdated.current = Date.now();
      }, limit - elapsed);

      return () => clearTimeout(timerId);
    }
  }, [value, limit]);

  return throttledValue;
}
