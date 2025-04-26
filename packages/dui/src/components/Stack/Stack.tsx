import { forwardRef } from 'react';
import { StackProps } from './Stack.types';
import { stackStyles } from './Stack.styles';
import { cn } from '../../utils/cn';

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, spacing, align, reverse, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(stackStyles({ direction, spacing, align, reverse }), className)}
        {...props}
      />
    );
  },
);

Stack.displayName = 'Stack';
