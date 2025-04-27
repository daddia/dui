import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Cross2Icon } from '@radix-ui/react-icons';

import { cn } from '../../utils/cn';
import {
  popoverArrowVariants,
  popoverCloseVariants,
  popoverContentVariants,
} from './Popover.styles';
import type {
  PopoverArrowProps,
  PopoverCloseProps,
  PopoverContentProps,
  PopoverRootProps,
  PopoverTriggerProps,
} from './Popover.types';

// Root Popover Component
const PopoverRoot = (props: PopoverRootProps) => {
  return <PopoverPrimitive.Root {...props} />;
};
PopoverRoot.displayName = 'PopoverRoot';

// Popover Trigger Component
const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  PopoverTriggerProps
>(({ asChild = false, ...props }, ref) => {
  return <PopoverPrimitive.Trigger ref={ref} asChild={asChild} {...props} />;
});
PopoverTrigger.displayName = 'PopoverTrigger';

// Popover Content Component
const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  (
    {
      className,
      children,
      size = 'md',
      align = 'center',
      sideOffset = 5,
      showCloseButton = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={cn(popoverContentVariants({ size }), className)}
          asChild={asChild}
          {...props}
        >
          {children}
          {showCloseButton && (
            <PopoverClose>
              <Cross2Icon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </PopoverClose>
          )}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    );
  },
);
PopoverContent.displayName = 'PopoverContent';

// Popover Arrow Component
const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  PopoverArrowProps
>(({ className, width = 10, height = 5, asChild = false, ...props }, ref) => {
  return (
    <PopoverPrimitive.Arrow
      ref={ref}
      width={width}
      height={height}
      className={cn(popoverArrowVariants(), className)}
      asChild={asChild}
      {...props}
    />
  );
});
PopoverArrow.displayName = 'PopoverArrow';

// Popover Close Component
const PopoverClose = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Close>,
  PopoverCloseProps
>(({ className, asChild = false, ...props }, ref) => {
  return (
    <PopoverPrimitive.Close
      ref={ref}
      className={cn(popoverCloseVariants(), className)}
      asChild={asChild}
      {...props}
    />
  );
});
PopoverClose.displayName = 'PopoverClose';

// Export as a composite component
export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Arrow: PopoverArrow,
  Close: PopoverClose,
});
