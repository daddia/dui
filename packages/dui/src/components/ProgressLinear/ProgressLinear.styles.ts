import { tv } from 'tailwind-variants';

export const progressLinearVariants = tv({
  base: ['relative w-full overflow-hidden rounded-full', 'bg-muted'],
  variants: {
    thickness: {
      xs: 'h-1',
      sm: 'h-2',
      md: 'h-3',
      lg: 'h-4',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-green-600',
      warning: 'text-amber-500',
      error: 'text-destructive',
      info: 'text-blue-500',
    },
    indeterminate: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    thickness: 'md',
    color: 'primary',
    indeterminate: false,
  },
});

export const progressLinearBarVariants = tv({
  base: ['absolute left-0 top-0 h-full', 'transition-[width] duration-300 ease-in-out'],
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      success: 'bg-green-600',
      warning: 'bg-amber-500',
      error: 'bg-destructive',
      info: 'bg-blue-500',
    },
    indeterminate: {
      true: [
        'animate-progress-linear',
        'w-[30%]',
        'bg-gradient-to-r from-transparent via-current to-transparent',
      ],
      false: '',
    },
    buffer: {
      true: 'opacity-30',
      false: '',
    },
  },
  defaultVariants: {
    color: 'primary',
    indeterminate: false,
    buffer: false,
  },
});

export const progressLinearLabelVariants = tv({
  base: ['font-medium'],
  variants: {
    position: {
      top: 'mb-1',
      right: 'ml-3',
      inside: 'absolute right-2 text-primary-foreground',
    },
    thickness: {
      xs: 'text-xs',
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-sm',
    },
    fixedWidth: {
      true: 'min-w-10 text-right',
      false: '',
    },
  },
  defaultVariants: {
    position: 'top',
    thickness: 'md',
    fixedWidth: false,
  },
});
