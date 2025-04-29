import { useEffect, useState } from 'react';
import { env } from '@dui/utils';

/**
 * This is used to determine if we're hydrating in React 18.
 *
 * The `useServerHandoffComplete` hook doesn't work with `<Suspense>`
 * because it assumes all hydration happens at one time during page load.
 *
 * Given that the problem only exists in React 18 we can rely
 * on newer APIs to determine if hydration is happening.
 */
function useIsHydratingInReact18(): boolean {
  const isServer = typeof document === 'undefined';
  const hasUseSyncExternalStore = 'useSyncExternalStore' in React;

  // This weird pattern makes sure bundlers don't throw at build time
  // because `useSyncExternalStore` isn't defined in React < 18
  const useSyncExternalStore = hasUseSyncExternalStore
    ? ((r) => r.useSyncExternalStore)(React)
    : () => false;

  // The type definitions for useSyncExternalStore are complex, and we're using it in a non-standard way here
  const result = useSyncExternalStore(
    () => () => {},
    () => false,
    () => (isServer ? false : true),
  ) as boolean;

  // React < 18 doesn't have any way to figure this out afaik
  if (!hasUseSyncExternalStore) {
    return false;
  }

  return result;
}

const state = { handoffComplete: false };

function finished() {
  state.handoffComplete = true;
}

// TODO: We want to get rid of this hook eventually
export function useServerHandoffComplete() {
  const [complete, setComplete] = useState(state.handoffComplete);

  useEffect(() => {
    if (complete) return;
    setComplete(true);
  }, [complete]);

  return env.isServer ? false : complete;
}
