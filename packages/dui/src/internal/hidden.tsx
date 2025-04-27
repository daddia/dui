import React, { forwardRef, HTMLAttributes } from 'react';

export enum HiddenFeatures {
  // The default, no features.
  None = 1 << 0,

  // Whether the element should be focusable or not.
  Focusable = 1 << 1,

  // Whether it should be completely hidden, even to assistive technologies.
  Hidden = 1 << 2,
}

type HiddenProps = HTMLAttributes<HTMLSpanElement> & {
  features?: HiddenFeatures;
};

export const Hidden = forwardRef<HTMLSpanElement, HiddenProps>(
  ({ features = HiddenFeatures.None, ...props }, ref) => {
    return (
      <span
        ref={ref}
        aria-hidden={
          (features & HiddenFeatures.Focusable) === HiddenFeatures.Focusable
            ? true
            : (props['aria-hidden'] ?? undefined)
        }
        hidden={(features & HiddenFeatures.Hidden) === HiddenFeatures.Hidden ? true : undefined}
        style={{
          position: 'fixed',
          top: 1,
          left: 1,
          width: 1,
          height: 0,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
          ...((features & HiddenFeatures.Hidden) === HiddenFeatures.Hidden &&
            !((features & HiddenFeatures.Focusable) === HiddenFeatures.Focusable) && {
              display: 'none',
            }),
          ...props.style,
        }}
        {...props}
      />
    );
  },
);

Hidden.displayName = 'Hidden';
