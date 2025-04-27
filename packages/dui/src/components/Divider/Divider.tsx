import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { dividerVariants } from './Divider.styles';
import { DividerProps } from './Divider.types';
import { cn } from '../../utils/cn';

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      orientation = 'horizontal',
      size = 'sm',
      color = 'default',
      withSpacing = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div';
    const spacingClasses =
      withSpacing && orientation === 'horizontal'
        ? 'my-4'
        : withSpacing && orientation === 'vertical'
          ? 'mx-4'
          : '';

    return (
      <Comp
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(dividerVariants({ orientation, size, color }), spacingClasses, className)}
        {...props}
      />
    );
  },
);

Divider.displayName = 'Divider';
