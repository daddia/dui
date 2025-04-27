import { ComponentPropsWithoutRef, ElementRef } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import type { VariantProps } from 'tailwind-variants';
import { sliderVariants } from './Slider.styles';

export type SliderSize = 'sm' | 'md' | 'lg';
export type SliderVariant = 'default' | 'gradient';
export type SliderOrientation = 'horizontal' | 'vertical';

export interface SliderProps
  extends Omit<ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'orientation'> {
  /**
   * The size of the slider
   * @default "md"
   */
  size?: SliderSize;
  /**
   * The visual variant of the slider
   * @default "default"
   */
  variant?: SliderVariant;
  /**
   * Whether the slider is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * The value of the slider
   */
  value?: number[];
  /**
   * The default value of the slider
   */
  defaultValue?: number[];
  /**
   * The callback that fires when the value changes
   */
  onValueChange?: (value: number[]) => void;
  /**
   * The callback that fires when the value changes (committed)
   */
  onValueCommit?: (value: number[]) => void;
  /**
   * The minimum value
   * @default 0
   */
  min?: number;
  /**
   * The maximum value
   * @default 100
   */
  max?: number;
  /**
   * The step value
   * @default 1
   */
  step?: number;
  /**
   * The orientation of the slider
   * @default "horizontal"
   */
  orientation?: SliderOrientation;
  /**
   * Whether to show marks at step intervals
   * @default false
   */
  showMarks?: boolean;
  /**
   * Whether to show the current value as a label
   * @default false
   */
  showValue?: boolean;
  /**
   * Label to display before the slider
   */
  label?: string;
  /**
   * Format function for the value label
   */
  formatValue?: (value: number) => string;
}

export type SliderRef = ElementRef<typeof SliderPrimitive.Root>;

export interface SliderTrackProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
}

export interface SliderRangeProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
}

export interface SliderThumbProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
}
