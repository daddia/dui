import { ComponentPropsWithoutRef, ElementRef } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import type { VariantProps } from 'tailwind-variants';
import { switchVariants } from './Switch.styles';

export type SwitchSize = 'sm' | 'md' | 'lg';
export type SwitchVariant = 'default' | 'primary' | 'success' | 'danger' | 'warning';

export interface SwitchProps extends ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  /**
   * The size of the switch
   * @default "md"
   */
  size?: SwitchSize;
  /**
   * The visual variant of the switch
   * @default "default"
   */
  variant?: SwitchVariant;
  /**
   * Label for the switch. If provided, the component will render as a flex with label and switch
   */
  label?: string;
  /**
   * Position of the label
   * @default "right"
   */
  labelPosition?: 'left' | 'right';
  /**
   * Description text to render below the label
   */
  description?: string;
  /**
   * Whether the switch is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Whether the switch is required
   * @default false
   */
  required?: boolean;
  /**
   * Whether the switch is read-only
   * @default false
   */
  readOnly?: boolean;
  /**
   * Whether the switch is checked
   */
  checked?: boolean;
  /**
   * The default checked state when uncontrolled
   */
  defaultChecked?: boolean;
  /**
   * A function called when the checked state changes
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * ID for the input element
   */
  id?: string;
  /**
   * Custom class for the label
   */
  labelClassName?: string;
  /**
   * Custom class for the description
   */
  descriptionClassName?: string;
}

export type SwitchRef = ElementRef<typeof SwitchPrimitive.Root>;

export interface SwitchThumbProps extends ComponentPropsWithoutRef<typeof SwitchPrimitive.Thumb> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
}
