import type { VariantProps } from 'tailwind-variants';
import { textVariants } from './Text.styles';

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof textVariants> {
  /**
   * The HTML element to render the text as
   * @default 'p'
   */
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /**
   * The content to display
   */
  children: React.ReactNode;
}
