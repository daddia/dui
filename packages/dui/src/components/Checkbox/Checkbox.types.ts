import type { VariantProps } from 'tailwind-variants';
import { checkboxVariants } from './Checkbox.styles';
import * as RadixCheckbox from '@radix-ui/react-checkbox';

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root>, 'asChild'>,
    VariantProps<typeof checkboxVariants> {
  /**
   * The label for the checkbox
   */
  label?: string;

  /**
   * If true, the checkbox will take the full width of its container
   */
  fullWidth?: boolean;

  /**
   * If true, prevent the user from interacting with the checkbox
   */
  disabled?: boolean;

  /**
   * The name of the checkbox
   */
  name?: string;

  /**
   * The value of the checkbox
   */
  value?: string;

  /**
   * Required indicator
   */
  required?: boolean;

  /**
   * The size of the checkbox
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The color of the checkbox
   */
  color?: 'default' | 'zinc' | 'red' | 'green' | 'amber' | 'purple';

  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
}

export interface CheckboxFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The checkbox component
   */
  control: React.ReactNode;

  /**
   * The label for the checkbox field
   */
  label: React.ReactNode;

  /**
   * Optional description text for the checkbox field
   */
  description?: React.ReactNode;
}
