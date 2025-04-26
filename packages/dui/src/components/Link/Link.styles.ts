import { tv } from 'tailwind-variants';

export const linkVariants = tv({
  base: [
    'inline-flex items-center',
    'text-foreground underline decoration-foreground/50 hover:decoration-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'transition-colors',
  ],
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      danger: 'text-destructive',
    },
    underline: {
      true: 'underline',
      false: 'no-underline',
    },
    external: {
      true: 'after:ml-1 after:inline-block after:content-["↗"]',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'default',
    underline: true,
    external: false,
  },
});
