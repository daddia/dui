import * as React from 'react';
import {boxVariants} from './Box.styles';
import type {BoxProps} from './Box.types';
import {cn} from '../../utils/cn';

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {className, as: Component = 'div', padding, shadow, radius, border, color, children, ...props},
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          boxVariants({
            padding,
            shadow,
            radius,
            border,
            color,
          }),
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Box.displayName = 'Box';
