import { useEffect, useState } from 'react';
import { disposables } from '@dui/utils';

/**
 * The `useDisposables` hook returns a `disposables` object that is disposed
 * when the component is unmounted.
 */
export function useDisposables() {
  // Using useState instead of useRef so that we can use the initializer function.
  const [d] = useState(disposables);
  useEffect(() => () => d.dispose(), [d]);
  return d;
}
