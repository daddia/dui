import React, { forwardRef } from 'react';

// Features flags to control the behavior of the Hidden component
export enum HiddenFeatures {
  // Keep the element in the DOM tree but hide it from view
  Hidden = 1 << 0,

  // Keep the element in the DOM tree but remove it from the accessibility tree
  Unmount = 1 << 1,
}

type HiddenProps = {
  features?: HiddenFeatures;
  children?: React.ReactNode;
};

// The Hidden component used for accessibility and DOM manipulation
export const Hidden = forwardRef<HTMLSpanElement, HiddenProps>(function Hidden(props, ref) {
  const { children, ...rest } = props;

  return (
    <span
      ref={ref}
      {...rest}
      style={{
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: 0,
      }}
      aria-hidden={true}
    >
      {children}
    </span>
  );
});
