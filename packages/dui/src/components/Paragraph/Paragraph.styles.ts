import {tv} from 'tailwind-variants';

export const paragraphVariants = tv({
  base: [
    'text-base/6',
    'text-zinc-950 dark:text-white',
  ],
  variants: {
    size: {
      xs: 'text-xs/6 sm:text-xs/6',
      sm: 'text-sm/6 sm:text-sm/6',
      base: 'text-base/6 sm:text-base/6',
      lg: 'text-lg/7 sm:text-lg/7',
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
    weight: 'normal',
    align: 'left',
    truncate: false,
  },
});
