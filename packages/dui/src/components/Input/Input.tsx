import * as React from 'react';
import { inputVariants } from './Input.styles';
import type { InputProps } from './Input.types';
import { cn } from '../../utils/cn';
import { Text } from '../Text';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      leftIcon,
      rightIcon,
      error,
      success,
      helperText,
      wrapperClassName,
      type = 'text',
      ...props
    },
    ref,
  ) => {
    // Determine variant based on error/success props
    const inputVariant = error ? 'error' : success ? 'success' : variant;

    return (
      <div className={cn('w-full space-y-1', wrapperClassName)}>
        <div className="relative">
          {leftIcon && (
            <div className="text-muted-foreground absolute left-3 top-1/2 z-10 -translate-y-1/2">
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({
                variant: inputVariant,
                size,
                fullWidth,
              }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className,
            )}
            ref={ref}
            aria-invalid={!!error}
            {...props}
          />
          {rightIcon && (
            <div className="text-muted-foreground absolute right-3 top-1/2 z-10 -translate-y-1/2">
              {rightIcon}
            </div>
          )}
        </div>

        {(error || success || helperText) && (
          <div className="mt-1">
            {error && (
              <Text size="sm" className="text-destructive">
                {error}
              </Text>
            )}
            {!error && success && (
              <Text size="sm" className="text-green-500">
                {success}
              </Text>
            )}
            {!error && !success && helperText && (
              <Text size="sm" className="text-muted-foreground">
                {helperText}
              </Text>
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
