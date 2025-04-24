import type {VariantProps} from 'tailwind-variants';
import {buttonVariants} from './Button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Optional element to render inside the button before the children
   */
  leftIcon?: React.ReactNode;

  /**
   * Optional element to render inside the button after the children
   */
  rightIcon?: React.ReactNode;

  /**
   * If true, the button will take the full width of its container
   */
  fullWidth?: boolean;

  /**
   * If true, the button will be rendered in a loading state
   */
  isLoading?: boolean;
}
