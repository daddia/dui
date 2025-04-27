import * as React from 'react';
import type { VariantProps } from 'tailwind-variants';
import { progressCircularVariants } from './ProgressCircular.styles';

export interface ProgressCircularProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressCircularVariants> {
  /**
   * The current value of the progress indicator (0-100).
   * If not provided or value is negative, the progress is indeterminate.
   */
  value?: number;

  /**
   * The color of the progress indicator.
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

  /**
   * The size of the circular progress.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The thickness of the circular progress stroke.
   */
  thickness?: number;

  /**
   * Whether to show the progress value as a label in the center.
   */
  showLabel?: boolean;

  /**
   * Custom label to display inside the progress circle.
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
}
