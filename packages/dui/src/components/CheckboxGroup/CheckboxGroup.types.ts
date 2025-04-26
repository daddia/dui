import React from 'react';
import type { VariantProps } from 'tailwind-variants';
import { checkboxGroupVariants } from './CheckboxGroup.styles';

export interface CheckboxGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof checkboxGroupVariants> {
  /**
   * The children of the checkbox group
   */
  children: React.ReactNode;

  /**
   * If true, checkboxes will be arranged vertically
   * @default true
   */
  vertical?: boolean;

  /**
   * The size of the gap between checkboxes
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * If true, the checkbox group will take the full width of its container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * The name attribute to be used for all checkboxes in the group
   */
  name?: string;

  /**
   * Label for the checkbox group
   */
  label?: string;

  /**
   * Required indicator
   */
  required?: boolean;
}
