import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

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
  SelectRef,
  SelectTriggerProps,
  SelectValueProps,
  SelectContentProps,
  SelectItemProps,
  SelectGroupProps,
  SelectLabelProps,
  SelectSeparatorProps,
  SelectSize,
  SelectVariant,
} from './Select.types';

// Custom icons instead of using lucide-react
const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// Helper function to safely type cloneElement
function typedCloneElement<P>(
  element: React.ReactElement<P>,
  props?: Partial<P>,
  ...children: React.ReactNode[]
): React.ReactElement<P> {
  return React.cloneElement(element, props as any, ...children);
}

const SelectRoot = React.forwardRef<SelectRef, SelectProps>(
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
      <SelectPrimitive.Root {...props}>
        <div className={cn(selectVariants({ disabled }), className)}>
          {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) {
              return child;
            }

            // Pass size and variant props to direct children if they accept them
            if (child.type === SelectTrigger) {
              // Check if the child props has a placeholder property
              const hasPlaceholder = Object.prototype.hasOwnProperty.call(
                child.props,
                'placeholder',
              );
              const triggerProps: Partial<SelectTriggerProps> = {
                size,
                variant,
                disabled,
                ...(placeholder && !hasPlaceholder ? { placeholder } : {}),
              };
              return typedCloneElement(child, triggerProps);
            }

            if (child.type === SelectContent) {
              return typedCloneElement(child, {
                size,
              });
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
  SelectTriggerProps
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
  SelectContentProps
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
            if (!React.isValidElement(child)) {
              return child;
            }

            // Pass size prop to direct children if they accept it
            if (
              child.type === SelectItem ||
              child.type === SelectLabel ||
              child.type === SelectGroup
            ) {
              return typedCloneElement(child, {
                size,
              });
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

const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, SelectItemProps>(
  ({ className, children, size = 'md', asChild = false, ...props }, ref) => (
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
  ),
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  SelectGroupProps
>(({ className, children, label, size = 'md', ...props }, ref) => (
  <SelectPrimitive.Group ref={ref} className={cn('', className)} {...props}>
    {label && <SelectLabel size={size}>{label}</SelectLabel>}
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      if (child.type === SelectItem) {
        return typedCloneElement(child, {
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
  SelectLabelProps
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
