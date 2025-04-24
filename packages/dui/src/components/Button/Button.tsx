import * as React from 'react';
import {buttonVariants} from './Button.styles';
import type {ButtonProps} from './Button.types';
import {cn} from '../../utils/cn';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftIcon,
      rightIcon,
      fullWidth,
      isLoading,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        className={cn(buttonVariants({variant, size}), fullWidth ? 'w-full' : '', className)}
        disabled={isDisabled}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';
