import { useEffect } from 'react';

type OverflowMeta = {
  containers?: Array<(() => HTMLElement[]) | HTMLElement[]>;
};

export function useDocumentOverflowLockedEffect(
  shouldBeLocked: boolean,
  doc: Document | null,
  meta: (meta: OverflowMeta) => OverflowMeta = () => ({ containers: [] }),
) {
  useEffect(() => {
    if (!doc || !shouldBeLocked) {
      return;
    }

    // Get the original overflow style
    const originalOverflow = doc.body.style.overflow;

    // Apply the meta data - we need to call this even if we don't use the return value
    // to maintain compatibility with any consumers that expect side effects
    meta({ containers: [] });

    // Prevent the document from scrolling
    doc.body.style.overflow = 'hidden';

    // Allow document to scroll when component unmounts
    return () => {
      doc.body.style.overflow = originalOverflow;
    };
  }, [shouldBeLocked, doc, meta]);
}
