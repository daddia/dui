import { tv } from 'tailwind-variants';

export const textVariants = tv({
  base: ['text-base/6', 'text-zinc-900 dark:text-zinc-100'],
  variants: {
    size: {
      xs: 'text-xs/6 sm:text-xs/6',
      sm: 'text-sm/6 sm:text-sm/6',
      base: 'text-base/6 sm:text-base/6',
      lg: 'text-lg/7 sm:text-lg/7',
      xl: 'text-xl/7 sm:text-xl/7',
      '2xl': 'text-2xl/8 sm:text-2xl/8',
      '3xl': 'text-3xl/8 sm:text-3xl/8',
      '4xl': 'text-4xl/9 sm:text-4xl/9',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      default: 'text-zinc-900 dark:text-zinc-100',
      muted: 'text-zinc-500 dark:text-zinc-400',
      primary: 'text-blue-600 dark:text-blue-400',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      danger: 'text-red-600 dark:text-red-400',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    truncate: {
      true: 'truncate',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'default',
    align: 'left',
    truncate: false,
  },
});
