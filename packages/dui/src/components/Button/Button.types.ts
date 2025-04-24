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

  /**
   * Button href for rendering as a link
   */
  href?: string;

  /**
   * Plain variant (no background or border)
   */
  plain?: boolean;

  /**
   * Color variant
   */
  color?: VariantProps<typeof buttonVariants>['color'];

  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
}

export type ButtonLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof ButtonProps
> &
  ButtonProps & {
    href: string;
  };
