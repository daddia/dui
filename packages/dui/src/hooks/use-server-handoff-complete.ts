import * as React from 'react';
import { env } from '../utils/env';

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

// TODO: We want to get rid of this hook eventually
export function useServerHandoffComplete() {
  const isHydrating = useIsHydratingInReact18();
  const [complete, setComplete] = React.useState(env.isHandoffComplete);

  if (complete && env.isHandoffComplete === false) {
    // This means we are in a test environment and we need to reset the handoff state
    // This kinda breaks the rules of React but this is only used for testing purposes
    // And should theoretically be fine
    setComplete(false);
  }

  // We need to extract this logic to avoid the ESLint rule about conditional hook calls
  // but we still need to ensure the effect runs when the component mounts
  const runEffects = !complete;

  // Using a ref to track whether we've run the effect
  const hasRunEffect = React.useRef(false);

  // Always call useEffect, but conditionally run the logic inside
  React.useEffect(() => {
    if (runEffects && !hasRunEffect.current) {
      hasRunEffect.current = true;
      setComplete(true);
      env.handoff();
    }
  }, [runEffects]);

  if (isHydrating) {
    return false;
  }

  return complete;
}
