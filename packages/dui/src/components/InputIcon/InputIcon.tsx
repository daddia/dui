import * as React from 'react';
import { inputIconVariants } from './InputIcon.styles';
import type { InputIconProps } from './InputIcon.types';
import { cn } from '../../utils/cn';

export const InputIcon = React.forwardRef<HTMLSpanElement, InputIconProps>(
  ({ className, position, ...props }, ref) => (
    <span
      ref={ref}
      data-slot="icon"
      className={cn(inputIconVariants({ position }), className)}
      {...props}
    />
  ),
);

InputIcon.displayName = 'InputIcon';
