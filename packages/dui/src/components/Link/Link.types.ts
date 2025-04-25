import type {VariantProps} from 'tailwind-variants';
import {linkVariants} from './Link.styles';

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>,
    VariantProps<typeof linkVariants> {
  /**
   * The content to display
   */
  children: React.ReactNode;

  /**
   * The URL the link points to
   */
  href: string;

  /**
   * Whether the link opens in a new tab
   * @default false
   */
  external?: boolean;
}
