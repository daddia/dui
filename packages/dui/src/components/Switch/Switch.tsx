import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { cn } from '../../utils/cn';
import {
  switchVariants,
  switchThumbVariants,
  switchContainerVariants,
  switchLabelVariants,
  switchDescriptionVariants,
} from './Switch.styles';
import type { SwitchProps, SwitchThumbProps } from './Switch.types';

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      disabled = false,
      required = false,
      readOnly = false,
      label,
      labelPosition = 'right',
      description,
      labelClassName,
      descriptionClassName,
      id,
      ...props
    },
    ref,
  ) => {
    const uniqueId = React.useId();
    const switchId = id || `switch-${uniqueId}`;

    // If there's a label or description, wrap the switch in a container
    if (label) {
      return (
        <div className={cn(switchContainerVariants({ labelPosition, disabled }), className)}>
          <SwitchPrimitive.Root
            ref={ref}
            id={switchId}
            disabled={disabled || readOnly}
            data-readonly={readOnly}
            data-disabled={disabled}
            aria-readonly={readOnly}
            aria-required={required}
            className={cn(switchVariants({ size, variant, disabled }))}
            {...props}
          >
            <SwitchThumb size={size} />
          </SwitchPrimitive.Root>

          <div className="flex flex-col">
            {label && (
              <label
                htmlFor={switchId}
                className={cn(switchLabelVariants(), labelClassName)}
                data-disabled={disabled}
              >
                {label}
                {required && <span className="text-danger ml-0.5">*</span>}
              </label>
            )}

            {description && (
              <p
                className={cn(switchDescriptionVariants(), descriptionClassName)}
                data-disabled={disabled}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      );
    }

    // Otherwise, render just the switch
    return (
      <SwitchPrimitive.Root
        ref={ref}
        id={switchId}
        disabled={disabled || readOnly}
        data-readonly={readOnly}
        data-disabled={disabled}
        aria-readonly={readOnly}
        aria-required={required}
        className={cn(switchVariants({ size, variant, disabled }), className)}
        {...props}
      >
        <SwitchThumb size={size} />
      </SwitchPrimitive.Root>
    );
  },
);
Switch.displayName = 'Switch';

// Export the thumb component separately to allow customization
const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Thumb>,
  SwitchThumbProps & { size?: 'sm' | 'md' | 'lg' }
>(({ className, size = 'md', asChild = false, ...props }, ref) => (
  <SwitchPrimitive.Thumb
    ref={ref}
    className={cn(switchThumbVariants({ size }), className)}
    asChild={asChild}
    {...props}
  />
));
SwitchThumb.displayName = SwitchPrimitive.Thumb.displayName;

export { Switch, SwitchThumb };
