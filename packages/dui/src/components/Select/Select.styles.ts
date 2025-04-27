import { tv } from 'tailwind-variants';

export const selectVariants = tv({
  base: 'w-full',
  variants: {
    disabled: {
      true: 'opacity-50 pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const selectTriggerVariants = tv({
  base: [
    'flex items-center justify-between rounded-md px-3 py-2',
    'text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'transition-colors',
  ],
  variants: {
    size: {
      sm: 'h-8 text-xs',
      md: 'h-10 text-sm',
      lg: 'h-12 text-base',
    },
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    disabled: false,
  },
});

export const selectValueVariants = tv({
  base: 'text-sm',
});

export const selectIconVariants = tv({
  base: 'h-4 w-4',
});

export const selectContentVariants = tv({
  base: [
    'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
  ],
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const selectViewportVariants = tv({
  base: 'p-1',
});

export const selectItemVariants = tv({
  base: [
    'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2',
    'outline-none focus:bg-accent focus:text-accent-foreground',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  ],
  variants: {
    size: {
      sm: 'text-xs py-1',
      md: 'text-sm py-1.5',
      lg: 'text-base py-2',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const selectItemTextVariants = tv({
  base: '',
});

export const selectItemIndicatorVariants = tv({
  base: '',
  variants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const selectLabelVariants = tv({
  base: 'py-1.5 pl-8 pr-2 font-semibold',
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const selectSeparatorVariants = tv({
  base: '-mx-1 my-1 h-px bg-muted',
});

export const selectScrollUpButtonVariants = tv({
  base: 'flex items-center justify-center h-6 bg-popover text-muted-foreground',
});

export const selectScrollDownButtonVariants = tv({
  base: 'flex items-center justify-center h-6 bg-popover text-muted-foreground',
});
