import { tv } from 'tailwind-variants';

export const sliderVariants = tv({
  base: [
    'relative flex touch-none select-none items-center',
    'data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:flex-col',
  ],
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
    variant: {
      default: '',
      gradient: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
    orientation: {
      horizontal: 'h-5 w-full',
      vertical: 'h-full w-5 flex-col',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    disabled: false,
    orientation: 'horizontal',
  },
});

export const sliderTrackVariants = tv({
  base: [
    'relative grow overflow-hidden rounded-full',
    'data-[orientation=horizontal]:h-[var(--track-height)] data-[orientation=vertical]:w-[var(--track-height)] data-[orientation=vertical]:h-full',
  ],
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
    variant: {
      default: 'bg-secondary',
      gradient: 'bg-secondary',
    },
    disabled: {
      true: '',
      false: '',
    },
    orientation: {
      horizontal: '',
      vertical: '',
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      orientation: 'horizontal',
      class: 'h-1',
    },
    {
      size: 'md',
      orientation: 'horizontal',
      class: 'h-2',
    },
    {
      size: 'lg',
      orientation: 'horizontal',
      class: 'h-3',
    },
    {
      size: 'sm',
      orientation: 'vertical',
      class: 'w-1',
    },
    {
      size: 'md',
      orientation: 'vertical',
      class: 'w-2',
    },
    {
      size: 'lg',
      orientation: 'vertical',
      class: 'w-3',
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'default',
    disabled: false,
    orientation: 'horizontal',
  },
});

export const sliderRangeVariants = tv({
  base: [
    'absolute rounded-full',
    'data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
  ],
  variants: {
    variant: {
      default: 'bg-primary',
      gradient: 'bg-gradient-to-r from-primary to-accent',
    },
    disabled: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    disabled: false,
  },
});

export const sliderThumbVariants = tv({
  base: [
    'relative block rounded-full shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    'border-2 border-primary bg-background transition-colors',
    'data-[orientation=horizontal]:top-[50%] data-[orientation=horizontal]:translate-y-[-50%]',
    'data-[orientation=vertical]:left-[50%] data-[orientation=vertical]:translate-x-[-50%]',
    'focus:outline-none',
  ],
  variants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
    disabled: {
      true: '',
      false: 'hover:border-primary/80',
    },
  },
  defaultVariants: {
    size: 'md',
    disabled: false,
  },
});

export const sliderMarkVariants = tv({
  base: [
    'absolute rounded-full bg-muted',
    'data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2',
    'data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2',
  ],
  variants: {
    size: {
      sm: 'h-1 w-1',
      md: 'h-1.5 w-1.5',
      lg: 'h-2 w-2',
    },
    active: {
      true: 'bg-primary',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    active: false,
  },
});

export const sliderValueIndicatorVariants = tv({
  base: [
    'absolute -top-7 rounded bg-popover px-1 py-0.5 text-center text-popover-foreground',
    'border border-border shadow-sm',
    'transform -translate-x-1/2',
    'text-xs',
  ],
  variants: {
    size: {
      sm: 'min-w-[20px]',
      md: 'min-w-[24px]',
      lg: 'min-w-[28px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
