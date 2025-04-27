import { useEffect, useRef } from 'react';
import { useEvent } from './use-event';

const Optional = Symbol();

export function optionalRef<T>(cb: (ref: T) => void, isOptional = true) {
  return Object.assign(cb, { [Optional]: isOptional });
}

export function useSyncRefs<TType>(
  ...refs: (React.MutableRefObject<TType | null> | ((instance: TType) => void) | null)[]
) {
  const cache = useRef(refs);

  useEffect(() => {
    cache.current = refs;
  }, [refs]);

  const syncRefs = useEvent((value: TType) => {
    for (const ref of cache.current) {
      if (ref == null) continue;
      if (typeof ref === 'function') ref(value);
      else ref.current = value;
    }
  });

  return refs.every(
    (ref) =>
      ref == null ||
      // @ts-expect-error The Optional symbol is added to function refs conditionally but TypeScript doesn't know about it
      ref?.[Optional],
  )
    ? undefined
    : syncRefs;
}
