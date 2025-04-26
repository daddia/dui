import type { VariantProps } from 'tailwind-variants';
import { paragraphVariants } from './Paragraph.styles';

export interface ParagraphProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof paragraphVariants> {
  /**
   * The content to display
   */
  children: React.ReactNode;
}
