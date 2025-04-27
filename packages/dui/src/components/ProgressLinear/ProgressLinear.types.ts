import * as React from 'react';
import type { VariantProps } from 'tailwind-variants';
import { progressLinearVariants } from './ProgressLinear.styles';

export interface ProgressLinearProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressLinearVariants> {
  /**
   * The current value of the progress indicator (0-100).
   * If not provided or value is negative, the progress is indeterminate.
   */
  value?: number;

  /**
   * Buffer value for the progress indicator (0-100).
   * Displays a secondary progress bar behind the main one.
   */
  buffer?: number;

  /**
   * The color of the progress indicator.
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

  /**
   * The thickness/height of the progress bar.
   */
  thickness?: 'xs' | 'sm' | 'md' | 'lg';

  /**
   * Whether to show the progress value as a label.
   */
  showLabel?: boolean;

  /**
   * Position of the label relative to the progress bar.
   */
  labelPosition?: 'top' | 'right' | 'inside';

  /**
   * Custom label to display with the progress bar.
   * If provided, this overrides the default percentage display.
   */
  label?: React.ReactNode;

  /**
   * Function to format the displayed value.
   * By default, it shows the value as a percentage (e.g. "25%").
   */
  formatLabel?: (value: number) => string;

  /**
   * Whether the progress indicator is indeterminate (shows animation without specific progress).
   * If true, this overrides the value prop.
   */
  indeterminate?: boolean;

  /**
   * Whether to make the label display a fixed width to prevent layout shifts
   * as the value changes.
   */
  fixedLabelWidth?: boolean;
}
