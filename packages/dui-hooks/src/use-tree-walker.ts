import { useEffect } from 'react';
import { getOwnerDocument } from '@dui/utils';

type AcceptNode = (node: HTMLElement) => boolean;
type WalkTree = (
  root: HTMLElement | null,
  cb: (node: HTMLElement) => void,
  acceptNode?: AcceptNode,
) => void;

export function useTreeWalker({
  container,
  accept,
  walk,
  enabled = true,
}: {
  container: HTMLElement | null;
  accept: AcceptNode;
  walk: (node: HTMLElement) => void;
  enabled?: boolean;
}) {
  useEffect(() => {
    if (!container) return;
    if (!enabled) return;

    const ownerDocument = getOwnerDocument(container) || document;
    const accept1 = accept.bind(null);
    const walk1 = walk.bind(null);

    const walkTree: WalkTree = (root, cb, _acceptNode = () => true) => {
      if (!root) return;

      const walker = ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode(node: Node) {
          return _acceptNode(node as HTMLElement)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
        },
      });

      // Skip the root element
      let current = walker.nextNode() as HTMLElement;
      while (current) {
        cb(current);
        current = walker.nextNode() as HTMLElement;
      }
    };

    walkTree(container, walk1, accept1);
  }, [container, accept, walk, enabled]);
}
