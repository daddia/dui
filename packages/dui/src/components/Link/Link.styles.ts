import { tv } from 'tailwind-variants';

export const linkVariants = tv({
  base: [
    'inline-flex items-center',
    'decoration-foreground/50 hover:decoration-foreground',
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
      default:
        'text-zinc-950 dark:text-white hover:decoration-zinc-950 dark:hover:decoration-white',
      muted:
        'text-zinc-500 dark:text-zinc-400 hover:decoration-zinc-500 dark:hover:decoration-zinc-400',
      primary:
        'text-blue-600 dark:text-blue-400 hover:decoration-blue-600 dark:hover:decoration-blue-400',
      success:
        'text-green-600 dark:text-green-400 hover:decoration-green-600 dark:hover:decoration-green-400',
      warning:
        'text-yellow-600 dark:text-yellow-400 hover:decoration-yellow-600 dark:hover:decoration-yellow-400',
      danger:
        'text-red-600 dark:text-red-400 hover:decoration-red-600 dark:hover:decoration-red-400',
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
