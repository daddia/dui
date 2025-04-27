import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { VariantProps } from 'tailwind-variants';
import { radioGroupVariants, radioVariants } from './RadioGroup.styles';

// RadioGroup Props
export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    VariantProps<typeof radioGroupVariants> {
  /**
   * Orientation of the RadioGroup.
   * @default "vertical"
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The size of the radio items.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The color of the radio items.
   * @default "primary"
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

  /**
   * Whether the radio items should be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The label of the radio group.
   */
  label?: string;

  /**
   * Description of the radio group shown below the label.
   */
  description?: string;

  /**
   * Error message to display when the radio group has an error.
   */
  error?: string;

  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
}

// Radio Item Props
export interface RadioProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioVariants> {
  /**
   * The size of the radio item.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The color of the radio item.
   * @default "primary"
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

  /**
   * Custom label for the radio item.
   */
  label?: React.ReactNode;

  /**
   * Description text for the radio item.
   */
  description?: React.ReactNode;

  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
}

// RadioIndicator Props
export interface RadioIndicatorProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
}
