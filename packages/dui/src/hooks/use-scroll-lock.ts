import { useDocumentOverflowLockedEffect } from './document-overflow/use-document-overflow';
import { useIsTopLayer } from './use-is-top-layer';

type OverflowMeta = {
  containers?: Array<(() => HTMLElement[]) | HTMLElement[]>;
};

export function useScrollLock(
  enabled: boolean,
  ownerDocument: Document | null,
  resolveAllowedContainers: () => HTMLElement[] = () => [document.body],
) {
  const isTopLayer = useIsTopLayer(enabled, 'scroll-lock');

  useDocumentOverflowLockedEffect(isTopLayer, ownerDocument, (meta: OverflowMeta) => ({
    containers: [...(meta.containers ?? []), resolveAllowedContainers],
  }));
}
