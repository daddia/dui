import { tv } from 'tailwind-variants';

export const boxVariants = tv({
  base: ['relative', 'rounded-lg', 'bg-background', 'border border-border'],
  variants: {
    padding: {
      none: 'p-0',
      xs: 'p-2',
      sm: 'p-3',
      base: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    },
    shadow: {
      none: '',
      sm: 'shadow-sm',
      base: 'shadow',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      base: 'rounded-lg',
      lg: 'rounded-xl',
      xl: 'rounded-2xl',
      full: 'rounded-full',
    },
    border: {
      none: 'border-0',
      sm: 'border',
      base: 'border-2',
      lg: 'border-4',
    },
    color: {
      default: 'bg-background border-border',
      muted: 'bg-muted border-border',
      primary: 'bg-primary/10 border-primary/20',
      success: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800',
      warning: 'bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800',
      danger: 'bg-destructive/10 border-destructive/20',
    },
  },
  defaultVariants: {
    padding: 'base',
    shadow: 'none',
    radius: 'base',
    border: 'sm',
    color: 'default',
  },
});
