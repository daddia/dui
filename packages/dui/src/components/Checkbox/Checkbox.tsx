import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {
  checkboxVariants,
  checkboxLabelVariants,
  checkboxWrapperVariants,
  checkboxIndicatorVariants,
} from './Checkbox.styles';
import type { CheckboxProps, CheckboxFieldProps } from './Checkbox.types';
import { cn } from '../../utils/cn';

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      label,
      id,
      size = 'md',
      fullWidth = false,
      color = 'default',
      checked,
      disabled,
      required,
      name,
      value,
      ...props
    },
    ref,
  ) => {
    // Generate a unique ID if one is not provided
    const generatedId = React.useId();
    const checkboxId = id || `checkbox-${generatedId}`;

    return (
      <div className={cn(checkboxWrapperVariants({ fullWidth }))}>
        <CheckboxPrimitive.Root
          ref={ref}
          id={checkboxId}
          checked={checked}
          disabled={disabled}
          required={required}
          name={name}
          value={value}
          className={cn(checkboxVariants({ size, fullWidth, color }), className)}
          {...props}
        >
          <CheckboxPrimitive.Indicator className={cn(checkboxIndicatorVariants({ size }))}>
            {checked === 'indeterminate' ? (
              <svg
                className="size-full"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7H11"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="size-full"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8L6 11L11 3.5"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <label htmlFor={checkboxId} className={cn(checkboxLabelVariants({ size }))}>
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export const CheckboxField = React.forwardRef<HTMLDivElement, CheckboxFieldProps>(
  ({ className, control, label, description, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'grid grid-cols-[1.125rem_1fr] gap-x-4 gap-y-1 sm:grid-cols-[1rem_1fr]',
        className,
      )}
      {...props}
    >
      <div className="mt-0.75 col-start-1 row-start-1 sm:mt-1">{control}</div>
      <div className="col-start-2 row-start-1 font-medium">{label}</div>
      {description && (
        <div className="col-start-2 row-start-2 mt-1.5 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </div>
      )}
    </div>
  ),
);

CheckboxField.displayName = 'CheckboxField';
