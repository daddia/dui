import type {VariantProps} from 'tailwind-variants';
import {boxVariants} from './Box.styles';

export interface BoxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof boxVariants> {
  /**
   * The content to display
   */
  children: React.ReactNode;

  /**
   * The HTML element to render the box as
   * @default 'div'
   */
  as?: 'div' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer' | 'nav';
}
