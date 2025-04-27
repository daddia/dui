import React from 'react';
import { useLatestValue } from './use-latest-value';

export const useEvent =
  // TODO: Add React.useEvent ?? once the useEvent hook is available
  function useEvent<
    F extends (...args: unknown[]) => unknown,
    P extends unknown[] = Parameters<F>,
    R = ReturnType<F>,
  >(cb: (...args: P) => R) {
    const cache = useLatestValue(cb);
    return React.useCallback((...args: P) => cache.current(...args), [cache]);
  };
