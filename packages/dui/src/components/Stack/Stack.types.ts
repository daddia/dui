import { HTMLAttributes } from 'react';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The direction of the stack
   * @default 'vertical'
   */
  direction?: 'vertical' | 'horizontal';

  /**
   * Spacing between stack items
   * @default 'md'
   */
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Alignment of stack items
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end' | 'stretch';

  /**
   * Whether to reverse the stack order
   * @default false
   */
  reverse?: boolean;
}
