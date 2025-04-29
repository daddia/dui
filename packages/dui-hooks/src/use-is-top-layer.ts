import { useId } from 'react';
import { DefaultMap, createStore } from '@dui/utils';
import { useIsoMorphicEffect } from './use-iso-morphic-effect';
import { useStore } from './use-store';

/**
 * Map of stable hierarchy stores based on a given scope.
 */
const hierarchyStores = new DefaultMap(() =>
  createStore(() => [] as string[], {
    ADD(id: unknown) {
      const stringId = String(id);
      if (this.includes(stringId)) return this;
      return [...this, stringId];
    },
    REMOVE(id: unknown) {
      const stringId = String(id);
      const idx = this.indexOf(stringId);
      if (idx === -1) return this;
      const copy = this.slice();
      copy.splice(idx, 1);
      return copy;
    },
  }),
);

/**
 * A hook that returns whether the current node is on the top of the hierarchy,
 * aka "top layer". Note: this does not use the native DOM "top-layer" but
 * conceptually it's the same thing.
 *
 * The hierarchy is also shared across multiple components that use the same
 * scope.
 *
 * This is useful to use in components and hooks that mutate the DOM or share
 * some global state.
 *
 * A use case for this is to use this inside of a `useOutsideClick` hook where
 * only the last rendered component should handle the outside click event.
 *
 * ```ts
 * <Dialog>
 *   <Menu>
 *     <MenuButton></MenuButton> // Pressing escape on an open `Menu` should close the `Menu` and not the `Dialog`.
 *     // …
 *   </Menu>
 * </Dialog>
 * ```
 */
export function useIsTopLayer(enabled: boolean, scope: string) {
  const hierarchyStore = hierarchyStores.get(scope);
  const id = useId();
  const hierarchy = useStore(hierarchyStore);

  useIsoMorphicEffect(() => {
    if (!enabled) return;

    hierarchyStore.dispatch('ADD', id);
    return () => hierarchyStore.dispatch('REMOVE', id);
  }, [hierarchyStore, enabled]);

  if (!enabled) return false;

  const idx = hierarchy.indexOf(id);
  const hierarchyLength = hierarchy.length;

  // Not in the hierarchy yet
  if (idx === -1) {
    // Assume that it will be inserted at the end, then it means that the `idx`
    // will be the length of the current hierarchy.
    return hierarchyLength === 0;
  }

  return idx === hierarchyLength - 1;
}
