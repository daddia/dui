import { useMemo } from 'react';
import { getOwnerDocument } from '../utils/owner';

export function useOwnerDocument(element?: Element | null) {
  return useMemo(() => getOwnerDocument(element), [element]);
}
