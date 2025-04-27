import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { inputGroupVariants } from './InputGroup.styles';
import type { InputGroupProps } from './InputGroup.types';
import { cn } from '../../utils/cn';

/**
 * InputGroup component is used to group an input with icons or other elements.
 * It sets up the styling context for those elements using data-slot attributes.
 *
 * Example usage:
 * ```tsx
 * <InputGroup>
 *   <span data-slot="icon">🔍</span>
 *   <input className="..." />
 *   <button data-slot="icon">×</button>
 * </InputGroup>
 * ```
 */
export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp ref={ref} className={cn(inputGroupVariants(), className)} {...props}>
        {children}
      </Comp>
    );
  },
);

InputGroup.displayName = 'InputGroup';
