import {HTMLAttributes} from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The maximum width of the container
   * @default '7xl'
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';

  /**
   * Whether the container should be centered
   * @default true
   */
  centered?: boolean;

  /**
   * Whether the container should have padding
   * @default true
   */
  padded?: boolean;
}
