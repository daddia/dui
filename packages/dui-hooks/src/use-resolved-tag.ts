import { useCallback, useState } from 'react';

// Helper function to check if a value is an HTMLElement
function isHTMLElement(value: unknown): value is HTMLElement {
  return value instanceof HTMLElement;
}

/**
 * Resolve the actual rendered tag of a DOM node. If the `tag` provided is
 * already a string we can use that as-is. This will happen when the `as` prop is
 * not used or when it's used with a string value.
 *
 * If an actual component is used, then we need to do some more work because
 * then we actually need to render the component to know what the tag name is.
 */
export function useResolvedTag<T extends React.ElementType>(tag: T) {
  const tagName = typeof tag === 'string' ? tag : undefined;
  const [resolvedTag, setResolvedTag] = useState<string | undefined>(tagName);

  return [
    // The resolved tag name
    tagName ?? resolvedTag,

    // This callback should be passed to the `ref` of a component
    useCallback(
      (ref: HTMLElement | null) => {
        // Tag name is already known and it's a string, no need to re-render
        if (tagName) return;

        if (ref && isHTMLElement(ref)) {
          // Tag name is not known yet, render the component to find out
          setResolvedTag(ref.tagName.toLowerCase());
        }
      },
      [tagName],
    ),
  ] as const;
}
