import * as React from 'react';
import * as RadixToggle from '@radix-ui/react-toggle';
import { toggleVariants } from './Toggle.styles';
import { ToggleProps } from './Toggle.types';
import { cn } from '@/lib/utils';

export const Toggle = React.forwardRef<React.ElementRef<typeof RadixToggle.Root>, ToggleProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      pressed,
      defaultPressed,
      onIcon,
      offIcon,
      children,
      ...props
    },
    ref,
  ) => {
    // Track the toggle state for icon display
    const [isPressed, setIsPressed] = React.useState(defaultPressed || false);

    React.useEffect(() => {
      if (pressed !== undefined) {
        setIsPressed(pressed);
      }
    }, [pressed]);

    const handlePressedChange = (isPressed: boolean) => {
      setIsPressed(isPressed);
      props.onPressedChange?.(isPressed);
    };

    return (
      <RadixToggle.Root
        ref={ref}
        pressed={pressed}
        defaultPressed={defaultPressed}
        onPressedChange={handlePressedChange}
        className={cn(toggleVariants({ variant, size, shape }), className)}
        {...props}
      >
        {onIcon && offIcon ? (isPressed ? onIcon : offIcon) : children}
      </RadixToggle.Root>
    );
  },
);

Toggle.displayName = 'Toggle';
