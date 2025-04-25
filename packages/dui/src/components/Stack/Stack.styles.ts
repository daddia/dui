import {tv} from 'tailwind-variants';

export const stackStyles = tv({
  base: 'flex',
  variants: {
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    spacing: {
      none: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
    reverse: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      direction: 'horizontal',
      reverse: true,
      className: 'flex-row-reverse',
    },
    {
      direction: 'vertical',
      reverse: true,
      className: 'flex-col-reverse',
    },
  ],
  defaultVariants: {
    direction: 'vertical',
    spacing: 'md',
    align: 'start',
    reverse: false,
  },
});
