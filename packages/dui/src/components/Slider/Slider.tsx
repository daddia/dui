import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '../../utils/cn';
import {
  sliderVariants,
  sliderTrackVariants,
  sliderRangeVariants,
  sliderThumbVariants,
  sliderMarkVariants,
  sliderValueIndicatorVariants,
} from './Slider.styles';
import type { SliderProps } from './Slider.types';

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      disabled = false,
      orientation = 'horizontal',
      min = 0,
      max = 100,
      step = 1,
      value,
      defaultValue = [0],
      showMarks = false,
      showValue = false,
      label,
      formatValue = (value) => `${value}`,
      ...props
    },
    ref,
  ) => {
    // Ensure defaultValue is an array
    const initialValue = defaultValue || [min];

    // Store the currently displayed values
    const [displayValues, setDisplayValues] = React.useState<number[]>(value || initialValue);

    // Update displayed values when controlled value changes
    React.useEffect(() => {
      if (value) {
        setDisplayValues(value);
      }
    }, [value]);

    // Update displayed values during drag
    const handleValueChange = (newValues: number[]) => {
      setDisplayValues(newValues);
      props.onValueChange?.(newValues);
    };

    // Generate step marks if showMarks is true
    const marks = React.useMemo(() => {
      if (!showMarks) return [];

      const result = [];
      const totalSteps = Math.floor((max - min) / step);

      // Don't render too many marks
      const markStep = totalSteps > 20 ? Math.ceil(totalSteps / 10) * step : step;

      for (let i = min; i <= max; i += markStep) {
        // Skip the min and max positions
        if (i === min || i === max) continue;

        // Position as percentage
        const position = ((i - min) / (max - min)) * 100;
        const isActive = displayValues.some((v) => v >= i);

        result.push({ value: i, position, isActive });
      }

      return result;
    }, [min, max, step, showMarks, displayValues]);

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && <div className="mb-1 text-sm font-medium">{label}</div>}
        <SliderPrimitive.Root
          ref={ref}
          className={cn(sliderVariants({ size, variant, disabled, orientation }), className)}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          value={value}
          defaultValue={initialValue}
          onValueChange={handleValueChange}
          onValueCommit={props.onValueCommit}
          orientation={orientation === 'horizontal' ? 'horizontal' : 'vertical'}
          dir="ltr"
          {...props}
        >
          <SliderPrimitive.Track
            className={cn(sliderTrackVariants({ size, variant, disabled, orientation }))}
          >
            <SliderPrimitive.Range className={cn(sliderRangeVariants({ variant, disabled }))} />

            {/* Step marks */}
            {showMarks &&
              marks.map(({ value: markValue, position, isActive }) => (
                <div
                  key={markValue}
                  className={cn(sliderMarkVariants({ size, active: isActive }))}
                  style={
                    orientation === 'horizontal'
                      ? { left: `${position}%` }
                      : { bottom: `${position}%` }
                  }
                  aria-hidden="true"
                />
              ))}
          </SliderPrimitive.Track>

          {displayValues.map((v, i) => (
            <React.Fragment key={i}>
              {/* Value indicators */}
              {showValue && (
                <div
                  className={cn(sliderValueIndicatorVariants({ size }))}
                  style={{
                    left:
                      orientation === 'horizontal'
                        ? `${((v - min) / (max - min)) * 100}%`
                        : undefined,
                    bottom:
                      orientation === 'vertical'
                        ? `${((v - min) / (max - min)) * 100}%`
                        : undefined,
                  }}
                >
                  {formatValue(v)}
                </div>
              )}

              <SliderPrimitive.Thumb className={cn(sliderThumbVariants({ size, disabled }))} />
            </React.Fragment>
          ))}
        </SliderPrimitive.Root>
      </div>
    );
  },
);

Slider.displayName = 'Slider';

export { Slider };
