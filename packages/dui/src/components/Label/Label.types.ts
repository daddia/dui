import type { VariantProps } from 'tailwind-variants';
import { labelVariants } from './Label.styles';
import * as LabelPrimitive from '@radix-ui/react-label';

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * Set to true to indicate this label is for a required field
   * Displays a red asterisk when true
   */
  required?: boolean;

  /**
   * Set to true to apply disabled styling
   * @default false
   */
  disabled?: boolean;
}
