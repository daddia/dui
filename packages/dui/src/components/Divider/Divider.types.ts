import { HTMLAttributes } from 'react';
import { VariantProps } from 'tailwind-variants';
import { dividerVariants } from './Divider.styles';

export interface DividerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  /**
   * The orientation of the divider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The thickness of the divider.
   * @default 'sm'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The color of the divider.
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'destructive' | 'muted';

  /**
   * If true, adds margin before and after the divider
   * @default false
   */
  withSpacing?: boolean;

  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
}
