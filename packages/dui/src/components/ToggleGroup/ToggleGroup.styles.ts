import { tv } from 'tailwind-variants';

export const toggleGroupVariants = tv({
  base: 'toggle-group inline-flex',
  variants: {
    variant: {
      default: '',
      outline: 'border border-input divide-x divide-input rounded-md overflow-hidden',
      ghost: '',
    },
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  compoundVariants: [
    {
      orientation: 'vertical',
      variant: 'outline',
      class: 'divide-x-0 divide-y',
    },
  ],
  defaultVariants: {
    variant: 'default',
    orientation: 'horizontal',
  },
});
