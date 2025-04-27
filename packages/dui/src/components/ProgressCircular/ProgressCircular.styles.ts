import { tv } from 'tailwind-variants';

export const progressCircularVariants = tv({
  base: ['relative inline-flex items-center justify-center overflow-hidden rounded-full'],
  variants: {
    size: {
      sm: 'size-8',
      md: 'size-12',
      lg: 'size-16',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-green-600',
      warning: 'text-amber-500',
      error: 'text-destructive',
      info: 'text-blue-500',
    },
    indeterminate: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    indeterminate: false,
  },
});

export const progressCircularLabelVariants = tv({
  base: ['absolute inset-0 flex items-center justify-center text-center font-medium'],
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const progressCircularSvgVariants = tv({
  base: ['transform -rotate-90'],
});

export const progressCircularTrackVariants = tv({
  base: ['stroke-current opacity-20'],
});

export const progressCircularIndicatorVariants = tv({
  base: ['stroke-current transition-all duration-300 ease-in-out'],
  variants: {
    indeterminate: {
      true: 'animate-progress-circular',
      false: '',
    },
  },
  defaultVariants: {
    indeterminate: false,
  },
});
