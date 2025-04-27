import * as React from 'react';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import { toggleGroupVariants } from './ToggleGroup.styles';
import { ToggleGroupProps, ToggleGroupItemProps } from './ToggleGroup.types';
import { cn } from '../../utils/cn';
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

// Component for single type toggle group
const SingleToggleGroup = React.forwardRef<
  React.ElementRef<typeof RadixToggleGroup.Root>,
  Omit<ToggleGroupProps, 'type' | 'value' | 'defaultValue' | 'onValueChange'> & {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
  }
>(
  (
    { className, variant, orientation, children, value, defaultValue, onValueChange, ...rest },
    ref,
  ) => {
    return (
      <RadixToggleGroup.Root
        ref={ref}
        type="single"
        orientation={orientation}
        className={cn(toggleGroupVariants({ variant, orientation }), className)}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        {...rest}
      >
        {children}
      </RadixToggleGroup.Root>
    );
  },
);
SingleToggleGroup.displayName = 'SingleToggleGroup';

// Component for multiple type toggle group
const MultipleToggleGroup = React.forwardRef<
  React.ElementRef<typeof RadixToggleGroup.Root>,
  Omit<ToggleGroupProps, 'type' | 'value' | 'defaultValue' | 'onValueChange'> & {
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
  }
>(
  (
    { className, variant, orientation, children, value, defaultValue, onValueChange, ...rest },
    ref,
  ) => {
    return (
      <RadixToggleGroup.Root
        ref={ref}
        type="multiple"
        orientation={orientation}
        className={cn(toggleGroupVariants({ variant, orientation }), className)}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        {...rest}
      >
        {children}
      </RadixToggleGroup.Root>
    );
  },
);
MultipleToggleGroup.displayName = 'MultipleToggleGroup';

// Main ToggleGroup component that delegates to the appropriate typed version
const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof RadixToggleGroup.Root>,
  ToggleGroupProps
>(
  (
    {
      className,
      variant,
      orientation,
      size = 'md',
      shape = 'default',
      type = 'multiple',
      value,
      defaultValue,
      onValueChange,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <ToggleGroupContext.Provider value={{ size, shape, variant }}>
        {type === 'single' ? (
          <SingleToggleGroup
            ref={ref}
            className={className}
            variant={variant}
            orientation={orientation}
            value={typeof value === 'string' ? value : undefined}
            defaultValue={typeof defaultValue === 'string' ? defaultValue : undefined}
            onValueChange={onValueChange as (value: string) => void}
            {...props}
          >
            {children}
          </SingleToggleGroup>
        ) : (
          <MultipleToggleGroup
            ref={ref}
            className={className}
            variant={variant}
            orientation={orientation}
            value={Array.isArray(value) ? value : undefined}
            defaultValue={Array.isArray(defaultValue) ? defaultValue : undefined}
            onValueChange={onValueChange as (value: string[]) => void}
            {...props}
          >
            {children}
          </MultipleToggleGroup>
        )}
      </ToggleGroupContext.Provider>
    );
  },
);
ToggleGroup.displayName = 'ToggleGroup';

export { ToggleGroup, ToggleGroupItem };
