import type { VariantProps } from 'tailwind-variants';
import { inputVariants } from './Input.styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
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
}
