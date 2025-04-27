import { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import type { VariantProps } from 'tailwind-variants';
import { selectVariants, selectTriggerVariants, selectLabelVariants } from './Select.styles';

export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectVariant = 'default' | 'outline' | 'ghost';

export interface SelectProps
  extends Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, 'children'> {
  /**
   * The children of the component, typically SelectTrigger, SelectContent and their children.
   */
  children: ReactNode;
  /**
   * The size of the select component
   * @default "md"
   */
  size?: SelectSize;
  /**
   * The visual variant of the select component
   * @default "default"
   */
  variant?: SelectVariant;
  /**
   * Whether the select is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * The controlled value of the select. Must be used in conjunction with onValueChange.
   */
  value?: string;
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;
  /**
   * The default value when uncontrolled.
   */
  defaultValue?: string;
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  /**
   * Optional className for styling the root element
   */
  className?: string;
}

// Use HTMLDivElement as the ref type since that's what Radix Select Root renders
export type SelectRef = HTMLDivElement;

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
  /**
   * Size variant for the trigger
   * @default "md"
   */
  size?: SelectSize;
  /**
   * Visual style variant
   * @default "default"
   */
  variant?: SelectVariant;
  /**
   * Whether the trigger is disabled
   * @default false
   */
  disabled?: boolean;
}

export interface SelectValueProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value> {
  /**
   * The placeholder text to display when no value is selected
   */
  placeholder?: string;
}

export interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
  /**
   * The position of the select content
   * @default "popper"
   */
  position?: 'item-aligned' | 'popper';
  /**
   * The side of the anchor to render from
   * @default "bottom"
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * The alignment of the select content
   * @default "center"
   */
  align?: 'start' | 'center' | 'end';
  /**
   * Size variant
   * @default "md"
   */
  size?: SelectSize;
}

export interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
  /**
   * Size variant
   * @default "md"
   */
  size?: SelectSize;
}

export interface SelectGroupProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group> {
  /**
   * The label for the group
   */
  label?: string;
  /**
   * Size variant
   * @default "md"
   */
  size?: SelectSize;
}

export interface SelectLabelProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>,
    VariantProps<typeof selectLabelVariants> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
  /**
   * Size variant
   * @default "md"
   */
  size?: SelectSize;
}

export interface SelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
}
