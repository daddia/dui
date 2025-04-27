import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';

import { cn } from '../../utils/cn';
import { contextMenuVariants } from './ContextMenu.styles';
import type {
  ContextMenuCheckboxItemProps,
  ContextMenuContentProps,
  ContextMenuGroupProps,
  ContextMenuItemProps,
  ContextMenuLabelProps,
  ContextMenuRadioGroupProps,
  ContextMenuRadioItemProps,
  ContextMenuRootProps,
  ContextMenuSeparatorProps,
  ContextMenuShortcutProps,
  ContextMenuSubContentProps,
  ContextMenuSubProps,
  ContextMenuSubTriggerProps,
  ContextMenuTriggerProps,
} from './ContextMenu.types';

// Extract the variants from the contextMenuVariants
const {
  trigger: triggerStyles,
  content: contentStyles,
  item: itemStyles,
  checkboxItem: checkboxItemStyles,
  radioItem: radioItemStyles,
  label: labelStyles,
  separator: separatorStyles,
  shortcut: shortcutStyles,
  subTrigger: subTriggerStyles,
  subContent: subContentStyles,
  group: groupStyles,
  groupLabel: groupLabelStyles,
  itemIndicator: itemIndicatorStyles,
  radioIndicator: radioIndicatorStyles,
} = contextMenuVariants();

// Root Context Menu Component
const ContextMenuRoot = (props: ContextMenuRootProps) => {
  return <ContextMenuPrimitive.Root {...props} />;
};
ContextMenuRoot.displayName = 'ContextMenuRoot';

// Context Menu Trigger Component
const ContextMenuTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Trigger>,
  ContextMenuTriggerProps
>(({ className, asChild = false, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.Trigger
      ref={ref}
      className={cn(triggerStyles(), className)}
      asChild={asChild}
      {...props}
    />
  );
});
ContextMenuTrigger.displayName = 'ContextMenuTrigger';

// Context Menu Content Component
const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContentProps
>(({ className, asChild = false, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        ref={ref}
        className={cn(contentStyles(), className)}
        asChild={asChild}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
});
ContextMenuContent.displayName = 'ContextMenuContent';

// Context Menu Item Component
const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItemProps
>(({ className, inset, destructive, asChild = false, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.Item
      ref={ref}
      className={cn(
        itemStyles(),
        inset && 'pl-8',
        destructive && 'text-destructive focus:bg-destructive focus:text-destructive-foreground',
        className,
      )}
      asChild={asChild}
      {...props}
    />
  );
});
ContextMenuItem.displayName = 'ContextMenuItem';

// Context Menu Checkbox Item Component
const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  ContextMenuCheckboxItemProps
>(({ className, children, checked, asChild = false, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(checkboxItemStyles(), className)}
      checked={checked}
      asChild={asChild}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
});
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

// Context Menu Radio Group Component
const ContextMenuRadioGroup = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioGroup>,
  ContextMenuRadioGroupProps
>(({ className, asChild = false, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.RadioGroup
      ref={ref}
      className={cn(groupStyles(), className)}
      asChild={asChild}
      {...props}
    />
  );
});
ContextMenuRadioGroup.displayName = 'ContextMenuRadioGroup';

// Context Menu Radio Item Component
const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  ContextMenuRadioItemProps
>(({ className, children, asChild = false, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      className={cn(radioItemStyles(), className)}
      asChild={asChild}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <DotFilledIcon className="h-4 w-4 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
});
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

// Context Menu Label Component
const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabelProps
>(({ className, inset, asChild = false, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.Label
      ref={ref}
      className={cn(labelStyles(), inset && 'pl-8', className)}
      asChild={asChild}
      {...props}
    />
  );
});
ContextMenuLabel.displayName = 'ContextMenuLabel';

// Context Menu Separator Component
const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  ContextMenuSeparatorProps
>(({ className, asChild = false, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.Separator
      ref={ref}
      className={cn(separatorStyles(), className)}
      asChild={asChild}
      {...props}
    />
  );
});
ContextMenuSeparator.displayName = 'ContextMenuSeparator';

// Context Menu Sub Component
const ContextMenuSub = (props: ContextMenuSubProps) => {
  return <ContextMenuPrimitive.Sub {...props} />;
};
ContextMenuSub.displayName = 'ContextMenuSub';

// Context Menu Sub Trigger Component
const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTriggerProps
>(({ className, inset, children, asChild = false, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(subTriggerStyles(), inset && 'pl-8', className)}
      asChild={asChild}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </ContextMenuPrimitive.SubTrigger>
  );
});
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger';

// Context Menu Sub Content Component
const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContentProps
>(({ className, asChild = false, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.SubContent
      ref={ref}
      className={cn(subContentStyles(), className)}
      asChild={asChild}
      {...props}
    />
  );
});
ContextMenuSubContent.displayName = 'ContextMenuSubContent';

// Context Menu Group Component
const ContextMenuGroup = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Group>,
  ContextMenuGroupProps
>(({ className, asChild = false, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.Group
      ref={ref}
      className={cn(groupStyles(), className)}
      asChild={asChild}
      {...props}
    />
  );
});
ContextMenuGroup.displayName = 'ContextMenuGroup';

// Context Menu Shortcut Component (non-Radix, custom component)
const ContextMenuShortcut = ({
  className,
  asChild = false,
  ...props
}: ContextMenuShortcutProps) => {
  const Comp = asChild ? React.Fragment : 'span';
  return <Comp className={cn(shortcutStyles(), className)} {...props} />;
};
ContextMenuShortcut.displayName = 'ContextMenuShortcut';

// Export as a composite component
export const ContextMenu = Object.assign(ContextMenuRoot, {
  Trigger: ContextMenuTrigger,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
  CheckboxItem: ContextMenuCheckboxItem,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  Label: ContextMenuLabel,
  Separator: ContextMenuSeparator,
  Shortcut: ContextMenuShortcut,
  Sub: ContextMenuSub,
  SubTrigger: ContextMenuSubTrigger,
  SubContent: ContextMenuSubContent,
  Group: ContextMenuGroup,
});
