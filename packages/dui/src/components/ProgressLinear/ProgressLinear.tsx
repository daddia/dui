import * as React from 'react';
import { cn } from '../../utils/cn';
import {
  progressLinearVariants,
  progressLinearBarVariants,
  progressLinearLabelVariants,
} from './ProgressLinear.styles';
import type { ProgressLinearProps } from './ProgressLinear.types';

export const ProgressLinear = React.forwardRef<HTMLDivElement, ProgressLinearProps>(
  (
    {
      className,
      value = 0,
      buffer,
      color = 'primary',
      thickness = 'md',
      showLabel = false,
      labelPosition = 'top',
      label,
      formatLabel,
      indeterminate = false,
      fixedLabelWidth = false,
      ...props
    },
    ref,
  ) => {
    // Normalize values to ensure they're between 0-100
    const normalizedValue = Math.max(0, Math.min(100, value));
    const normalizedBuffer =
      buffer !== undefined ? Math.max(normalizedValue, Math.min(100, buffer)) : undefined;

    // Format label
    const formattedLabel = React.useMemo(() => {
      if (label !== undefined) return label;
      if (formatLabel) return formatLabel(normalizedValue);
      return `${Math.round(normalizedValue)}%`;
    }, [label, normalizedValue, formatLabel]);

    // Determine if we need to wrap the progress bar and label based on the label position
    const needsWrapper = showLabel && (labelPosition === 'top' || labelPosition === 'right');

    // Render the actual progress bar
    const renderProgressBar = () => (
      <div
        className={cn(progressLinearVariants({ thickness, color, indeterminate }), className)}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={indeterminate ? undefined : normalizedValue}
        aria-valuetext={indeterminate ? undefined : `${normalizedValue}%`}
        ref={ref}
        {...props}
      >
        {/* Buffer Bar (optional) */}
        {normalizedBuffer !== undefined && !indeterminate && (
          <div
            className={cn(progressLinearBarVariants({ color, buffer: true }))}
            style={{ width: `${normalizedBuffer}%` }}
          />
        )}

        {/* Progress Bar */}
        <div
          className={cn(progressLinearBarVariants({ color, indeterminate }))}
          style={indeterminate ? undefined : { width: `${normalizedValue}%` }}
        />

        {/* Inside Label (if enabled) */}
        {showLabel && labelPosition === 'inside' && (
          <div
            className={cn(
              progressLinearLabelVariants({
                position: 'inside',
                thickness,
                fixedWidth: fixedLabelWidth,
              }),
            )}
          >
            {formattedLabel}
          </div>
        )}
      </div>
    );

    // If no wrapper is needed, just render the progress bar
    if (!needsWrapper) {
      return renderProgressBar();
    }

    // Otherwise, render the progress bar with a label in the appropriate position
    return (
      <div className={cn('flex', labelPosition === 'right' ? 'items-center' : 'flex-col')}>
        {showLabel && labelPosition === 'top' && (
          <div
            className={cn(
              progressLinearLabelVariants({
                position: 'top',
                thickness,
                fixedWidth: fixedLabelWidth,
              }),
            )}
          >
            {formattedLabel}
          </div>
        )}

        {renderProgressBar()}

        {showLabel && labelPosition === 'right' && (
          <div
            className={cn(
              progressLinearLabelVariants({
                position: 'right',
                thickness,
                fixedWidth: fixedLabelWidth,
              }),
            )}
          >
            {formattedLabel}
          </div>
        )}
      </div>
    );
  },
);

ProgressLinear.displayName = 'ProgressLinear';
