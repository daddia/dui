import * as React from 'react';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import { toggleGroupVariants } from './ToggleGroup.styles';
import { ToggleGroupProps, ToggleGroupItemProps } from './ToggleGroup.types';
import { cn } from '@/lib/utils';
import { toggleVariants } from '../Toggle/Toggle.styles';

const ToggleGroupContext = React.createContext<{
  size?: 'sm' | 'md' | 'lg';
  shape?: 'default' | 'square' | 'pill';
  variant?: 'default' | 'outline' | 'ghost';
}>({
  size: 'md',
  shape: 'default',
  variant: 'default',
});

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof RadixToggleGroup.Item>,
  ToggleGroupItemProps
>(({ className, children, ...props }, ref) => {
  const { size, shape, variant } = React.useContext(ToggleGroupContext);

  return (
    <RadixToggleGroup.Item
      ref={ref}
      className={cn(
        toggleVariants({
          size,
          shape,
          variant,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </RadixToggleGroup.Item>
  );
});
ToggleGroupItem.displayName = 'ToggleGroupItem';

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof RadixToggleGroup.Root>,
  ToggleGroupProps
>(
  (
    { className, variant, orientation, size = 'md', shape = 'default', children, ...props },
    ref,
  ) => {
    return (
      <ToggleGroupContext.Provider value={{ size, shape, variant }}>
        <RadixToggleGroup.Root
          ref={ref}
          orientation={orientation}
          className={cn(toggleGroupVariants({ variant, orientation }), className)}
          {...props}
        >
          {children}
        </RadixToggleGroup.Root>
      </ToggleGroupContext.Provider>
    );
  },
);
ToggleGroup.displayName = 'ToggleGroup';

export { ToggleGroup, ToggleGroupItem };
