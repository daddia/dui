import type { VariantProps } from 'tailwind-variants';
import { headingVariants } from './Heading.styles';

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {
  /**
   * The heading level (1-6)
   * @default 1
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * The content to display
   */
  children: React.ReactNode;
}
