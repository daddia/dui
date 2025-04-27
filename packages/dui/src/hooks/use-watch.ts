import { useEffect, useRef } from 'react';
import { useEvent } from './use-event';

export function useWatch<T extends unknown[]>(
  cb: (newValues: [...T], oldValues: [...T]) => void | (() => void),
  dependencies: [...T],
) {
  const track = useRef([] as unknown as typeof dependencies);
  const action = useEvent(cb);

  useEffect(() => {
    const oldValues = [...track.current] as [...T];

    for (const [idx, value] of dependencies.entries()) {
      if (track.current[idx] !== value) {
        // At least 1 item changed
        const returnValue = action(dependencies, oldValues);
        track.current = dependencies;
        return returnValue;
      }
    }
  }, [action, dependencies]);
}
