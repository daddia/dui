import { tv } from 'tailwind-variants';

export const radioGroupVariants = tv({
  base: ['flex gap-2'],
  variants: {
    orientation: {
      horizontal: 'flex-row items-center',
      vertical: 'flex-col items-start',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    disabled: false,
  },
});

export const radioVariants = tv({
  base: [
    'group peer relative flex items-center',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  variants: {
    size: {
      sm: 'gap-1.5 text-sm',
      md: 'gap-2 text-base',
      lg: 'gap-2.5 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const radioItemVariants = tv({
  base: [
    'aspect-square h-4 w-4 rounded-full border',
    'border-primary text-primary-foreground shadow',
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  variants: {
    size: {
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
    color: {
      primary: 'border-primary text-primary-foreground',
      secondary: 'border-secondary text-secondary-foreground',
      success: 'border-green-600 text-green-50',
      warning: 'border-amber-500 text-amber-950',
      error: 'border-destructive text-destructive-foreground',
      info: 'border-blue-500 text-blue-50',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export const radioIndicatorVariants = tv({
  base: [
    'flex items-center justify-center',
    'h-full w-full relative',
    'after:block after:h-2 after:w-2 after:rounded-full after:bg-current',
  ],
  variants: {
    size: {
      sm: 'after:h-1.5 after:w-1.5',
      md: 'after:h-2 after:w-2',
      lg: 'after:h-2.5 after:w-2.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const radioLabelVariants = tv({
  base: [
    'text-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  ],
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const radioDescriptionVariants = tv({
  base: ['text-muted-foreground leading-normal'],
  variants: {
    size: {
      sm: 'text-xs mt-0.5',
      md: 'text-sm mt-1',
      lg: 'text-base mt-1.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const radioGroupLabelVariants = tv({
  base: ['font-medium text-foreground'],
  variants: {
    size: {
      sm: 'text-sm mb-1.5',
      md: 'text-base mb-2',
      lg: 'text-lg mb-2.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const radioGroupDescriptionVariants = tv({
  base: ['text-muted-foreground'],
  variants: {
    size: {
      sm: 'text-xs mb-2',
      md: 'text-sm mb-2.5',
      lg: 'text-base mb-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const radioGroupErrorVariants = tv({
  base: ['text-destructive'],
  variants: {
    size: {
      sm: 'text-xs mt-1',
      md: 'text-sm mt-1.5',
      lg: 'text-base mt-2',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
