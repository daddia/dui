import { useSyncExternalStore } from 'react';
import type { Store } from '@dui/utils';

export function useStore<T, ActionKey extends string = string>(store: Store<T, ActionKey>) {
  return useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot);
}
