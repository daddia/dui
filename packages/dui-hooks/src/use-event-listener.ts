import { useEffect } from 'react';
import { useLatestValue } from './use-latest-value';

export function useEventListener<TType extends keyof WindowEventMap>(
  elementInput: HTMLElement | Document | Window | EventTarget | null | undefined,
  type: TType,
  listener: (event: WindowEventMap[TType]) => void,
  options?: boolean | AddEventListenerOptions,
) {
  const listenerRef = useLatestValue(listener);

  useEffect(() => {
    const element = elementInput ?? window;

    function handler(event: WindowEventMap[TType]) {
      listenerRef.current(event);
    }

    element.addEventListener(type, handler as EventListener, options);
    return () => element.removeEventListener(type, handler as EventListener, options);
  }, [elementInput, type, options, listenerRef]);
}
