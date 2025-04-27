import * as React from 'react';
import { buttonGroupVariants } from './ButtonGroup.styles';
import { ButtonGroupProps } from './ButtonGroup.types';
import { cn } from '../../utils/cn';

// Create a context to share the group props with child buttons
export const ButtonGroupContext = React.createContext<{
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isGrouped: boolean;
  isAttached: boolean;
}>({
  isGrouped: false,
  isAttached: false,
});

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      className,
      variant,
      orientation,
      spacing,
      attached = false,
      size,
      fullWidth,
      children,
      ...props
    },
    ref,
  ) => {
    const groupContextValue = React.useMemo(
      () => ({
        variant,
        size,
        fullWidth,
        isGrouped: true,
        isAttached: attached,
      }),
      [variant, size, fullWidth, attached],
    );

    // Add role="group" for accessibility
    return (
      <ButtonGroupContext.Provider value={groupContextValue}>
        <div
          ref={ref}
          role="group"
          className={cn(
            buttonGroupVariants({
              orientation,
              spacing: attached ? 'none' : spacing,
              attached,
            }),
            fullWidth && 'w-full',
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </ButtonGroupContext.Provider>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';
