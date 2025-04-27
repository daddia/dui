import { tv } from 'tailwind-variants';

export const scrollAreaVariants = tv({
  base: ['relative overflow-hidden'],
  variants: {
    disabled: {
      true: 'overflow-hidden',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const scrollAreaViewportVariants = tv({
  base: ['h-full w-full rounded-[inherit]'],
  variants: {
    disabled: {
      true: 'overflow-hidden',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const scrollAreaScrollbarVariants = tv({
  base: [
    'flex touch-none select-none transition-colors',
    'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5 data-[orientation=vertical]:border-l border-l-transparent',
    'data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:border-t border-t-transparent',
  ],
  variants: {
    size: {
      sm: ['data-[orientation=vertical]:w-1.5', 'data-[orientation=horizontal]:h-1.5'],
      md: ['data-[orientation=vertical]:w-2.5', 'data-[orientation=horizontal]:h-2.5'],
      lg: ['data-[orientation=vertical]:w-4', 'data-[orientation=horizontal]:h-4'],
    },
    visible: {
      true: 'bg-muted/30 hover:bg-muted/40',
      false: 'bg-transparent',
    },
  },
  defaultVariants: {
    size: 'md',
    visible: false,
  },
});

export const scrollAreaThumbVariants = tv({
  base: [
    'relative flex-1 -translate-x-1/2 bg-border/50 hover:bg-border',
    'data-[orientation=vertical]:-translate-x-1/2',
    'data-[orientation=horizontal]:-translate-y-1/2',
    'transition-colors duration-200',
  ],
  variants: {
    rounded: {
      true: 'rounded-full',
      false: '',
    },
    size: {
      sm: ['data-[orientation=vertical]:w-1', 'data-[orientation=horizontal]:h-1'],
      md: ['data-[orientation=vertical]:w-1.5', 'data-[orientation=horizontal]:h-1.5'],
      lg: ['data-[orientation=vertical]:w-2', 'data-[orientation=horizontal]:h-2'],
    },
  },
  defaultVariants: {
    rounded: true,
    size: 'md',
  },
});

export const scrollAreaCornerVariants = tv({
  base: ['bg-muted/30'],
});
