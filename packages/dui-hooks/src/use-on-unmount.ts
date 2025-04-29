import { useEffect, useRef } from 'react';
import { useEvent } from './use-event';

// Helper function to run a task in a microtask (on next tick)
const microTask = (cb: () => void) => {
  Promise.resolve().then(cb);
};

export function useOnUnmount(cb: () => void) {
  const stableCb = useEvent(cb);

  const trulyUnmounted = useRef(false);
  useEffect(() => {
    trulyUnmounted.current = false;

    return () => {
      trulyUnmounted.current = true;
      microTask(() => {
        if (!trulyUnmounted.current) return;

        stableCb();
      });
    };
  }, [stableCb]);
}
