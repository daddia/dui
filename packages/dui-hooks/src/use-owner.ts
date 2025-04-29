import { useMemo } from 'react';
import { getOwnerDocument } from '@dui/utils';

export function useOwnerDocument(element?: Element | null) {
  return useMemo(() => getOwnerDocument(element), [element]);
}
