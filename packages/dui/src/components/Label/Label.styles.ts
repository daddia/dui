import { tv } from 'tailwind-variants';

export const labelVariants = tv({
  base: ['text-sm font-medium text-foreground', 'select-none', 'transition-colors'],
  variants: {
    variant: {
      default: '',
      required: 'after:content-["*"] after:ml-0.5 after:text-destructive',
    },
    size: {
      default: 'text-sm',
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
    weight: {
      default: 'font-medium',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    disabled: {
      true: 'text-muted-foreground cursor-not-allowed',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    weight: 'default',
    disabled: false,
  },
});
