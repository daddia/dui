import type { VariantProps } from 'tailwind-variants';
import { inputVariants } from './Input.styles';

// Rename the size property from the Tailwind variants to avoid collision
type InputVariantProps = Omit<VariantProps<typeof inputVariants>, 'size'> & {
  /**
   * Size variant for the input
   * @default 'md'
   */
  sizeVariant?: VariantProps<typeof inputVariants>['size'];
};

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    InputVariantProps {
  /**
   * Element to render before the input
   */
  leftIcon?: React.ReactNode;

  /**
   * Element to render after the input
   */
  rightIcon?: React.ReactNode;

  /**
   * Helper text to display below the input
   */
  helperText?: string;

  /**
   * Error message to display
   */
  error?: string;

  /**
   * Success message to display
   */
  success?: string;

  /**
   * Whether the input should take the full width of its container
   * @default true
   */
  fullWidth?: boolean;

  /**
   * Custom wrapper className
   */
  wrapperClassName?: string;

  /**
   * Size attribute for the HTML input element
   */
  size?: number;
}
