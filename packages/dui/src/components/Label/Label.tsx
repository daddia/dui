import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { labelVariants } from './Label.styles';
import type { LabelProps } from './Label.types';
import { cn } from '../../utils/cn';

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  (
    { className, variant, size, weight, children, required, disabled, asChild = false, ...props },
    ref,
  ) => {
    // If required is true, use the 'required' variant
    const labelVariant = required ? 'required' : variant;

    return (
      <LabelPrimitive.Root
        ref={ref}
        className={cn(
          labelVariants({
            variant: labelVariant,
            size,
            weight,
            disabled,
          }),
          className,
        )}
        {...props}
        asChild={asChild}
      >
        {children}
      </LabelPrimitive.Root>
    );
  },
);

Label.displayName = 'Label';

export { Label };
