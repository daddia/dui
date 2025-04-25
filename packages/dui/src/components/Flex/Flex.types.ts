import {HTMLAttributes} from 'react';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The direction of the flex container
   * @default 'row'
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';

  /**
   * Whether the flex items should wrap
   * @default 'nowrap'
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  /**
   * Gap between flex items
   * @default 'md'
   */
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Vertical alignment of flex items
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';

  /**
   * Horizontal alignment of flex items
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}
