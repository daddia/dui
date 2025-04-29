import { useDocumentOverflowLockedEffect } from './use-document-overflow';
import { useIsTopLayer } from './use-is-top-layer';

export function useScrollLock(
  enabled: boolean,
  ownerDocument: Document | null = null,
  resolveAllowedContainers: () => HTMLElement[] = () => [document.body],
) {
  const isTopLayer = useIsTopLayer(enabled, 'scroll-lock');

  // Use the document from ownerDocument if provided
  const documentElement = ownerDocument?.documentElement;

  useDocumentOverflowLockedEffect(isTopLayer, {
    documentElement: documentElement || undefined,
  });
}
