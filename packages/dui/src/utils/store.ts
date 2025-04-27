type ChangeFn = () => void;
type UnsubscribeFn = () => void;
type ActionFn<T, Args extends unknown[] = unknown[]> = (this: T, ...args: Args) => T | void;
type StoreActions<Key extends string, T> = Record<Key, ActionFn<T>>;

export interface Store<T, ActionKey extends string> {
  getSnapshot(): T;
  subscribe(onChange: ChangeFn): UnsubscribeFn;
  dispatch<Args extends unknown[] = unknown[]>(action: ActionKey, ...args: Args): void;
}

export function createStore<T, ActionKey extends string>(
  initial: () => T,
  actions: StoreActions<ActionKey, T>,
): Store<T, ActionKey> {
  let state: T = initial();

  const listeners = new Set<ChangeFn>();

  return {
    getSnapshot() {
      return state;
    },

    subscribe(onChange) {
      listeners.add(onChange);

      return () => listeners.delete(onChange);
    },

    dispatch<Args extends unknown[] = unknown[]>(key: ActionKey, ...args: Args) {
      const newState = (actions[key] as ActionFn<T, Args>).call(state, ...args);
      if (newState) {
        state = newState;
        listeners.forEach((listener) => listener());
      }
    },
  };
}
