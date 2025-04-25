import {tv} from 'tailwind-variants';

export const boxVariants = tv({
  base: [
    'relative',
    'rounded-lg',
    'bg-white dark:bg-zinc-900',
    'border border-zinc-200 dark:border-zinc-800',
  ],
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
      default: 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800',
      muted: 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800',
      primary: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800',
      success: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800',
      warning: 'bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800',
      danger: 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800',
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
