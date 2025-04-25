import * as React from 'react';
import {textVariants} from './Text.styles';
import type {TextProps} from './Text.types';
import {cn} from '../../utils/cn';

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {className, as: Component = 'p', size, weight, color, align, truncate, children, ...props},
    ref,
  ) => {
    return (
      <Component
        className={cn(
          textVariants({
            size,
            weight,
            color: color as 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'danger',
            align,
            truncate,
          }),
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = 'Text';
