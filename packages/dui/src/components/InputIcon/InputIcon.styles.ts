import { tv } from 'tailwind-variants';

export const inputIconVariants = tv({
  base: [
    'pointer-events-none absolute top-1/2 -translate-y-1/2 z-10 size-5',
    'text-muted-foreground',
  ],
  variants: {
    position: {
      left: 'left-3',
      right: 'right-3',
    },
  },
  defaultVariants: {
    position: 'left',
  },
});
