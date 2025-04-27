import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '../../utils/cn';
import {
  radioGroupVariants,
  radioVariants,
  radioItemVariants,
  radioIndicatorVariants,
  radioLabelVariants,
  radioDescriptionVariants,
  radioGroupLabelVariants,
  radioGroupDescriptionVariants,
  radioGroupErrorVariants,
} from './RadioGroup.styles';
import type { RadioGroupProps, RadioProps, RadioIndicatorProps } from './RadioGroup.types';

const RadioGroupContext = React.createContext<{
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
}>({
  size: 'md',
  color: 'primary',
});

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(
  (
    {
      className,
      orientation = 'vertical',
      size = 'md',
      color = 'primary',
      disabled = false,
      label,
      description,
      error,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full">
        {/* Label (if provided) */}
        {label && <div className={cn(radioGroupLabelVariants({ size }))}>{label}</div>}

        {/* Description (if provided) */}
        {description && (
          <div className={cn(radioGroupDescriptionVariants({ size }))}>{description}</div>
        )}

        <RadioGroupContext.Provider value={{ size, color }}>
          <RadioGroupPrimitive.Root
            ref={ref}
            className={cn(radioGroupVariants({ orientation, disabled }), className)}
            disabled={disabled}
            asChild={asChild}
            {...props}
          />
        </RadioGroupContext.Provider>

        {/* Error message (if provided) */}
        {error && <div className={cn(radioGroupErrorVariants({ size }))}>{error}</div>}
      </div>
    );
  },
);
RadioGroupRoot.displayName = RadioGroupPrimitive.Root.displayName;

const RadioItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioProps>(
  (
    {
      className,
      children,
      size: sizeProp,
      color: colorProp,
      label,
      description,
      disabled,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const context = React.useContext(RadioGroupContext);
    const size = sizeProp || context.size;
    const color = colorProp || context.color;

    return (
      <div className={cn(radioVariants({ size }))}>
        <RadioGroupPrimitive.Item
          ref={ref}
          className={cn(radioItemVariants({ size, color }), className)}
          disabled={disabled}
          asChild={asChild}
          {...props}
        >
          <RadioIndicator size={size} />
        </RadioGroupPrimitive.Item>

        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label className={cn(radioLabelVariants({ size }))} htmlFor={props.id || props.value}>
                {label}
              </label>
            )}
            {description && (
              <span className={cn(radioDescriptionVariants({ size }))}>{description}</span>
            )}
          </div>
        )}

        {children}
      </div>
    );
  },
);
RadioItem.displayName = RadioGroupPrimitive.Item.displayName;

const RadioIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  RadioIndicatorProps & { size?: 'sm' | 'md' | 'lg' }
>(({ className, size = 'md', asChild = false, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Indicator
      ref={ref}
      className={cn(radioIndicatorVariants({ size }), className)}
      asChild={asChild}
      {...props}
    />
  );
});
RadioIndicator.displayName = RadioGroupPrimitive.Indicator.displayName;

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioItem,
  Indicator: RadioIndicator,
});
