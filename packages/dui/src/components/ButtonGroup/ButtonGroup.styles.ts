import { tv } from 'tailwind-variants';

export const buttonGroupVariants = tv({
  base: 'inline-flex',
  variants: {
    variant: {
      default: '',
      outline: '',
      ghost: '',
    },
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    spacing: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-3',
      lg: 'gap-4',
    },
    attached: {
      true: '[&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:last-child)]:border-r-0 [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none',
      false: '',
    },
  },
  compoundVariants: [
    {
      orientation: 'vertical',
      attached: true,
      class:
        '[&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:last-child)]:border-b-0 [&>*:first-child]:rounded-b-none [&>*:last-child]:rounded-t-none',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    spacing: 'xs',
    attached: false,
  },
});
