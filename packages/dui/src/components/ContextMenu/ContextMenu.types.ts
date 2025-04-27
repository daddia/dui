import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import type { VariantProps } from 'tailwind-variants';
import { contextMenuVariants } from './ContextMenu.styles';

// Base props for all context menu components
export interface ContextMenuBaseProps {
  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
}

// Props for the root ContextMenu component
export interface ContextMenuRootProps extends ContextMenuPrimitive.ContextMenuProps {}

// Props for the ContextMenuTrigger component
export interface ContextMenuTriggerProps
  extends ContextMenuPrimitive.ContextMenuTriggerProps,
    ContextMenuBaseProps {}

// Props for the ContextMenuContent component
export interface ContextMenuContentProps
  extends ContextMenuPrimitive.ContextMenuContentProps,
    ContextMenuBaseProps,
    React.RefAttributes<HTMLDivElement> {
  /**
   * Custom className to be applied to the component
   */
  className?: string;
}

// Props for the ContextMenuItem component
export interface ContextMenuItemProps
  extends ContextMenuPrimitive.ContextMenuItemProps,
    ContextMenuBaseProps,
    VariantProps<typeof contextMenuVariants> {
  /**
   * Custom className to be applied to the component
   */
  className?: string;

  /**
   * If true, the item will be destructive (red styling)
   */
  destructive?: boolean;

  /**
   * If true, the item will have additional left padding (for alignment with indicators)
   */
  inset?: boolean;
}

// Props for the ContextMenuCheckboxItem component
export interface ContextMenuCheckboxItemProps
  extends ContextMenuPrimitive.ContextMenuCheckboxItemProps,
    ContextMenuBaseProps {
  /**
   * Custom className to be applied to the component
   */
  className?: string;
}

// Props for the ContextMenuRadioItem component
export interface ContextMenuRadioItemProps
  extends ContextMenuPrimitive.ContextMenuRadioItemProps,
    ContextMenuBaseProps {
  /**
   * Custom className to be applied to the component
   */
  className?: string;
}

// Props for the ContextMenuLabel component
export interface ContextMenuLabelProps
  extends ContextMenuPrimitive.ContextMenuLabelProps,
    ContextMenuBaseProps {
  /**
   * Custom className to be applied to the component
   */
  className?: string;

  /**
   * If true, the label will have additional left padding (for alignment with items)
   */
  inset?: boolean;
}

// Props for the ContextMenuSeparator component
export interface ContextMenuSeparatorProps
  extends ContextMenuPrimitive.ContextMenuSeparatorProps,
    ContextMenuBaseProps {
  /**
   * Custom className to be applied to the component
   */
  className?: string;
}

// Props for the ContextMenuShortcut component
export interface ContextMenuShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    ContextMenuBaseProps {}

// Props for the ContextMenuGroup component
export interface ContextMenuGroupProps
  extends ContextMenuPrimitive.ContextMenuGroupProps,
    ContextMenuBaseProps {
  /**
   * Custom className to be applied to the component
   */
  className?: string;
}

// Props for the ContextMenuSub component
export interface ContextMenuSubProps
  extends ContextMenuPrimitive.ContextMenuSubProps,
    ContextMenuBaseProps {}

// Props for the ContextMenuSubTrigger component
export interface ContextMenuSubTriggerProps
  extends ContextMenuPrimitive.ContextMenuSubTriggerProps,
    ContextMenuBaseProps {
  /**
   * Custom className to be applied to the component
   */
  className?: string;

  /**
   * If true, the trigger will be inset (additional left padding)
   */
  inset?: boolean;
}

// Props for the ContextMenuSubContent component
export interface ContextMenuSubContentProps
  extends ContextMenuPrimitive.ContextMenuSubContentProps,
    ContextMenuBaseProps {
  /**
   * Custom className to be applied to the component
   */
  className?: string;
}

// Props for the ContextMenuRadioGroup component
export interface ContextMenuRadioGroupProps
  extends ContextMenuPrimitive.ContextMenuRadioGroupProps,
    ContextMenuBaseProps {
  /**
   * Custom className to be applied to the component
   */
  className?: string;
}
