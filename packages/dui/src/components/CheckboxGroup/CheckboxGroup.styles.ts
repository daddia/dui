import { tv } from 'tailwind-variants';

export const checkboxGroupVariants = tv({
  base: 'space-y-3',
  variants: {
    vertical: {
      true: 'space-y-3 flex flex-col',
      false: 'flex flex-row items-center gap-6',
    },
    size: {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    vertical: true,
    size: 'md',
    fullWidth: false,
  },
  compoundVariants: [
    {
      vertical: false,
      size: 'sm',
      class: 'gap-4',
    },
    {
      vertical: false,
      size: 'md',
      class: 'gap-6',
    },
    {
      vertical: false,
      size: 'lg',
      class: 'gap-8',
    },
  ],
});
