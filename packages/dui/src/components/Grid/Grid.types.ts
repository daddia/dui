import { HTMLAttributes } from 'react';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns in the grid
   * @default 1
   */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  /**
   * Gap between grid items
   * @default 'md'
   */
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Vertical alignment of grid items
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end' | 'stretch';

  /**
   * Horizontal alignment of grid items
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}
