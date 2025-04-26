import * as React from 'react';
import { cn } from '../../utils/cn';
import { checkboxGroupVariants } from './CheckboxGroup.styles';
import type { CheckboxGroupProps } from './CheckboxGroup.types';

export const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      className,
      children,
      vertical = true,
      size = 'md',
      fullWidth = false,
      name,
      label,
      required,
      ...props
    },
    ref,
  ) => {
    // Clone children to add the name prop if provided
    const childrenWithProps = name
      ? React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<{ name?: string }>, {
              name,
            });
          }
          return child;
        })
      : children;

    return (
      <div className={cn(fullWidth ? 'w-full' : '')}>
        {label && (
          <div className="mb-2 flex items-center">
            <span className="text-sm font-medium leading-none">
              {label}
              {required && <span className="ml-1 text-red-500">*</span>}
            </span>
          </div>
        )}
        <div
          ref={ref}
          className={cn(
            checkboxGroupVariants({
              vertical,
              size,
              fullWidth,
            }),
            className,
          )}
          role="group"
          aria-labelledby={label ? `${label.replace(/\s+/g, '-').toLowerCase()}-group` : undefined}
          {...props}
        >
          {childrenWithProps}
        </div>
      </div>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';
