import { tv } from 'tailwind-variants';

export const avatarVariants = tv({
  base: 'relative flex shrink-0 overflow-hidden rounded-full',
  variants: {
    size: {
      xs: 'h-6 w-6',
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
      '2xl': 'h-20 w-20',
    },
    status: {
      online: 'ring-2 ring-green-500',
      offline: 'ring-2 ring-gray-400',
      busy: 'ring-2 ring-red-500',
      away: 'ring-2 ring-amber-500',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const avatarImageVariants = tv({
  base: 'aspect-square h-full w-full',
});

export const avatarFallbackVariants = tv({
  base: 'flex h-full w-full items-center justify-center rounded-full bg-muted',
  variants: {
    delayMs: {
      0: '',
      500: '',
      1000: '',
    },
  },
  defaultVariants: {
    delayMs: 500,
  },
});

export const avatarGroupVariants = tv({
  base: 'flex items-center -space-x-2',
  variants: {
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
      '2xl': '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
