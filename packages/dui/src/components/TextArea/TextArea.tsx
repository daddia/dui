import React, { useId } from 'react';
import { textAreaVariants, textAreaWrapperVariants } from './TextArea.styles';
import { TextAreaProps } from './TextArea.types';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      variant,
      resize,
      rows = 'default',
      error,
      success,
      helperText,
      id,
      showCount = false,
      value,
      maxLength,
      wrapperClassName,
      required,
      disabled,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const valueLength = typeof value === 'string' ? value.length : 0;
    const hasError = !!error;
    const hasSuccess = !!success;
    const hasHelperText = !!helperText;
    const showFooter = hasError || hasSuccess || hasHelperText || showCount;

    const Comp = asChild ? Slot : 'textarea';

    return (
      <div className={cn(textAreaWrapperVariants(), wrapperClassName)}>
        <Comp
          ref={ref}
          id={textareaId}
          className={textAreaVariants({ variant, resize, rows, className })}
          aria-invalid={hasError}
          value={value}
          maxLength={maxLength}
          disabled={disabled}
          required={required}
          data-disabled={disabled}
          {...props}
        />

        {showFooter && (
          <div className="mt-1.5 flex justify-between text-xs">
            <div>
              {error && <p className="text-destructive">{error}</p>}
              {!error && success && <p className="text-green-500">{success}</p>}
              {!error && !success && helperText && (
                <p className="text-muted-foreground">{helperText}</p>
              )}
            </div>
            {showCount && (
              <div className="text-muted-foreground tabular-nums">
                {valueLength}
                {maxLength ? `/${maxLength}` : ''}
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
