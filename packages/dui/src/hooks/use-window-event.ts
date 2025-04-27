import { useEffect } from 'react';
import { useLatestValue } from './use-latest-value';

export function useWindowEvent<TType extends keyof WindowEventMap>(
  enabled: boolean,
  type: TType,
  listener: (ev: WindowEventMap[TType]) => void,
  options?: boolean | AddEventListenerOptions,
) {
  const listenerRef = useLatestValue(listener);

  useEffect(() => {
    if (!enabled) return;

    function handler(event: WindowEventMap[TType]) {
      listenerRef.current(event);
    }

    window.addEventListener(type, handler, options);
    return () => window.removeEventListener(type, handler, options);
  }, [enabled, type, options, listenerRef]);
}
