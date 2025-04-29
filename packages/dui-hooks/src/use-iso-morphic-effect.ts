import { useEffect, useLayoutEffect, type DependencyList, type EffectCallback } from 'react';
import { env } from '@dui/utils';

// This approach avoids the conditional hook call by using a constant value
// that's determined at module initialization time
const useEffectFunction = env.isServer ? useEffect : useLayoutEffect;

export const useIsoMorphicEffect = (effect: EffectCallback, deps?: DependencyList) => {
  return useEffectFunction(effect, deps);
};
