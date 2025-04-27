import { tv } from 'tailwind-variants';

export const inputVariants = tv({
  base: [
    'flex w-full rounded-md border bg-background text-foreground',
    'ring-offset-background placeholder:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/25',
    'transition-colors duration-200',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive/25',
  ],
  variants: {
    variant: {
      default: 'border-input',
      error: 'border-destructive',
      success: 'border-green-500',
    },
    size: {
      sm: 'h-8 px-3 py-1 text-xs',
      md: 'h-10 px-3 py-2 text-sm',
      lg: 'h-12 px-4 py-3 text-base',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    fullWidth: true,
  },
});
