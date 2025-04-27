import { tv } from 'tailwind-variants';

export const dividerVariants = tv({
  base: 'shrink-0 border-muted',
  variants: {
    orientation: {
      horizontal: 'w-full border-t',
      vertical: 'h-full border-l',
    },
    size: {
      xs: 'border-[0.5px]',
      sm: 'border-[1px]',
      md: 'border-[1.5px]',
      lg: 'border-[2px]',
      xl: 'border-[3px]',
    },
    color: {
      default: 'border-muted',
      primary: 'border-primary',
      destructive: 'border-destructive',
      muted: 'border-muted/50',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    size: 'sm',
    color: 'default',
  },
});
