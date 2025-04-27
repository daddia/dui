import * as React from 'react';
import { cn } from '../../utils/cn';
import {
  progressCircularVariants,
  progressCircularLabelVariants,
  progressCircularSvgVariants,
  progressCircularTrackVariants,
  progressCircularIndicatorVariants,
} from './ProgressCircular.styles';
import type { ProgressCircularProps } from './ProgressCircular.types';

export const ProgressCircular = React.forwardRef<HTMLDivElement, ProgressCircularProps>(
  (
    {
      className,
      value = 0,
      color = 'primary',
      size = 'md',
      thickness = 3,
      showLabel = false,
      label,
      formatLabel,
      indeterminate = false,
      ...props
    },
    ref,
  ) => {
    // Normalize value to ensure it's between 0-100
    const normalizedValue = Math.max(0, Math.min(100, value));

    // Calculate circle parameters
    const getCircleParams = () => {
      const sizeMap = {
        sm: 32,
        md: 48,
        lg: 64,
      };
      const diameter = sizeMap[size];
      const radius = (diameter - thickness) / 2;
      const circumference = 2 * Math.PI * radius;

      return {
        diameter,
        radius,
        circumference,
      };
    };

    const { diameter, radius, circumference } = getCircleParams();

    // Calculate stroke dash offset for determinate progress
    const strokeDashOffset = circumference - (normalizedValue / 100) * circumference;

    // Format label
    const formattedLabel = React.useMemo(() => {
      if (label !== undefined) return label;
      if (formatLabel) return formatLabel(normalizedValue);
      return `${Math.round(normalizedValue)}%`;
    }, [label, normalizedValue, formatLabel]);

    return (
      <div
        ref={ref}
        className={cn(progressCircularVariants({ size, color, indeterminate }), className)}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={indeterminate ? undefined : normalizedValue}
        aria-valuetext={indeterminate ? undefined : `${normalizedValue}%`}
        {...props}
      >
        <svg
          className={cn(progressCircularSvgVariants())}
          width={diameter}
          height={diameter}
          viewBox={`0 0 ${diameter} ${diameter}`}
        >
          {/* Track Circle */}
          <circle
            className={cn(progressCircularTrackVariants())}
            cx={diameter / 2}
            cy={diameter / 2}
            r={radius}
            fill="none"
            strokeWidth={thickness}
          />

          {/* Progress Indicator */}
          <circle
            className={cn(progressCircularIndicatorVariants({ indeterminate }))}
            cx={diameter / 2}
            cy={diameter / 2}
            r={radius}
            fill="none"
            strokeWidth={thickness}
            strokeDasharray={circumference}
            strokeDashoffset={indeterminate ? circumference * 0.75 : strokeDashOffset}
            strokeLinecap="round"
          />
        </svg>

        {showLabel && (
          <div className={cn(progressCircularLabelVariants({ size }))}>{formattedLabel}</div>
        )}
      </div>
    );
  },
);

ProgressCircular.displayName = 'ProgressCircular';
