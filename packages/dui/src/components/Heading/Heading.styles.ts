import {tv} from 'tailwind-variants';

export const headingVariants = tv({
  base: ['font-semibold', 'tracking-tight', 'text-zinc-950 dark:text-white'],
  variants: {
    size: {
      xs: 'text-lg/8 sm:text-base/8',
      sm: 'text-xl/8 sm:text-lg/8',
      base: 'text-2xl/8 sm:text-xl/8',
      lg: 'text-3xl/8 sm:text-2xl/8',
      xl: 'text-4xl/8 sm:text-3xl/8',
      '2xl': 'text-5xl/8 sm:text-4xl/8',
      '3xl': 'text-6xl/8 sm:text-5xl/8',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
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
    weight: 'semibold',
    align: 'left',
    truncate: false,
  },
});
