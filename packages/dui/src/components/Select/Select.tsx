import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

import { cn } from '../../utils/cn';
import {
  selectVariants,
  selectTriggerVariants,
  selectValueVariants,
  selectIconVariants,
  selectContentVariants,
  selectViewportVariants,
  selectItemVariants,
  selectItemTextVariants,
  selectItemIndicatorVariants,
  selectLabelVariants,
  selectSeparatorVariants,
  selectScrollUpButtonVariants,
  selectScrollDownButtonVariants,
} from './Select.styles';
import type {
  SelectProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectContentProps,
  SelectItemProps,
  SelectGroupProps,
  SelectLabelProps,
  SelectSeparatorProps,
} from './Select.types';

const SelectRoot = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Root>, SelectProps>(
  (
    {
      className,
      children,
      size = 'md',
      variant = 'default',
      disabled = false,
      placeholder,
      ...props
    },
    ref,
  ) => {
    return (
      <SelectPrimitive.Root disabled={disabled} {...props} ref={ref}>
        <div className={cn(selectVariants({ disabled }), className)}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              // Pass size and variant props to direct children if they accept them
              if (child.type === SelectTrigger) {
                return React.cloneElement(child as React.ReactElement<any>, {
                  size,
                  variant,
                  disabled,
                  ...(placeholder && !child.props.placeholder ? { placeholder } : {}),
                });
              }
              if (child.type === SelectContent) {
                return React.cloneElement(child as React.ReactElement<any>, {
                  size,
                });
              }
            }
            return child;
          })}
        </div>
      </SelectPrimitive.Root>
    );
  },
);
SelectRoot.displayName = SelectPrimitive.Root.displayName;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps & {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'outline' | 'ghost';
    disabled?: boolean;
  }
>(
  (
    {
      className,
      children,
      size = 'md',
      variant = 'default',
      disabled = false,
      asChild = false,
      ...props
    },
    ref,
  ) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(selectTriggerVariants({ size, variant, disabled }), className)}
      asChild={asChild}
      {...props}
    >
      <>
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDown className={cn(selectIconVariants())} />
        </SelectPrimitive.Icon>
      </>
    </SelectPrimitive.Trigger>
  ),
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Value>,
  SelectValueProps
>(({ className, placeholder, children, ...props }, ref) => (
  <SelectPrimitive.Value
    ref={ref}
    placeholder={placeholder}
    className={cn(selectValueVariants(), className)}
    {...props}
  >
    {children}
  </SelectPrimitive.Value>
));
SelectValue.displayName = SelectPrimitive.Value.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps & { size?: 'sm' | 'md' | 'lg' }
>(
  (
    {
      className,
      children,
      position = 'popper',
      side = 'bottom',
      align = 'center',
      size = 'md',
      asChild = false,
      ...props
    },
    ref,
  ) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(selectContentVariants({ size }), className)}
        position={position}
        side={side}
        align={align}
        asChild={asChild}
        {...props}
      >
        <SelectPrimitive.ScrollUpButton className={cn(selectScrollUpButtonVariants())}>
          <ChevronUp className={cn(selectIconVariants())} />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className={cn(selectViewportVariants())}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              // Pass size prop to direct children if they accept it
              if (
                child.type === SelectItem ||
                child.type === SelectLabel ||
                child.type === SelectGroup
              ) {
                return React.cloneElement(child as React.ReactElement<any>, {
                  size,
                });
              }
            }
            return child;
          })}
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className={cn(selectScrollDownButtonVariants())}>
          <ChevronDown className={cn(selectIconVariants())} />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  ),
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps & { size?: 'sm' | 'md' | 'lg' }
>(({ className, children, size = 'md', asChild = false, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(selectItemVariants({ size }), className)}
    asChild={asChild}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className={cn(selectItemIndicatorVariants({ size }))} />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText className={cn(selectItemTextVariants())}>
      {children}
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  SelectGroupProps & { size?: 'sm' | 'md' | 'lg' }
>(({ className, children, label, size = 'md', ...props }, ref) => (
  <SelectPrimitive.Group ref={ref} className={cn('', className)} {...props}>
    {label && <SelectLabel size={size}>{label}</SelectLabel>}
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === SelectItem) {
        return React.cloneElement(child as React.ReactElement<any>, {
          size,
        });
      }
      return child;
    })}
  </SelectPrimitive.Group>
));
SelectGroup.displayName = SelectPrimitive.Group.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectLabelProps & { size?: 'sm' | 'md' | 'lg' }
>(({ className, children, size = 'md', asChild = false, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(selectLabelVariants({ size }), className)}
    asChild={asChild}
    {...props}
  >
    {children}
  </SelectPrimitive.Label>
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SelectSeparatorProps
>(({ className, asChild = false, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(selectSeparatorVariants(), className)}
    asChild={asChild}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export const Select = Object.assign(SelectRoot, {
  Trigger: SelectTrigger,
  Value: SelectValue,
  Content: SelectContent,
  Item: SelectItem,
  Group: SelectGroup,
  Label: SelectLabel,
  Separator: SelectSeparator,
});
