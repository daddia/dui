import { tv } from 'tailwind-variants';

export const toggleVariants = tv({
  base: [
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
    'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'hover:bg-muted hover:text-muted-foreground',
    'group-[.toggle-group]:border-r-0 group-[.toggle-group]:first:rounded-r-none group-[.toggle-group]:last:rounded-l-none group-[.toggle-group]:not-first:not-last:rounded-none',
  ],
  variants: {
    variant: {
      default: 'bg-transparent',
      outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      sm: 'h-8 px-2.5 text-xs',
      md: 'h-9 px-3',
      lg: 'h-10 px-3.5',
    },
    shape: {
      default: 'rounded-md',
      square: 'rounded-none',
      pill: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    shape: 'default',
  },
});
