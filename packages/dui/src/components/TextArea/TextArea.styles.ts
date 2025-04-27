import { tv } from 'tailwind-variants';

export const textAreaWrapperVariants = tv({
  base: [
    'relative block w-full',
    // Background color + shadow applied to inset pseudo element
    'before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.md)-1px)] before:bg-background/80 before:shadow-sm',
    // Focus ring
    'after:pointer-events-none after:absolute after:inset-0 after:rounded-md after:ring-transparent after:ring-inset focus-within:after:ring-2 focus-within:after:ring-primary/25',
    // Disabled state
    'has-[[data-disabled]]:opacity-50 has-[[data-disabled]]:before:bg-muted/5 has-[[data-disabled]]:before:shadow-none',
    // Invalid state
    'has-[[aria-invalid=true]]:before:shadow-destructive/10',
  ],
});

export const textAreaVariants = tv({
  base: [
    // Basic layout
    'relative block w-full rounded-md appearance-none',
    // Typography
    'text-sm text-foreground placeholder:text-muted-foreground',
    // Border
    'border border-input hover:border-input/80 data-[disabled]:border-input/50 dark:data-[disabled]:border-input/20',
    // Background color
    'bg-transparent',
    // Disable default focus styles in favor of the wrapper's focus ring
    'focus:outline-none',
    // Invalid state
    'aria-[invalid=true]:border-destructive aria-[invalid=true]:hover:border-destructive',
    // Padding (responsive)
    'px-3 py-2',
  ],
  variants: {
    variant: {
      default: '',
      error: 'border-destructive',
      success: 'border-green-500',
    },
    resize: {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize',
    },
    rows: {
      default: 'min-h-[80px]',
      sm: 'min-h-[60px]',
      md: 'min-h-[80px]',
      lg: 'min-h-[120px]',
      xl: 'min-h-[160px]',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
    resize: 'vertical',
    rows: 'default',
    fullWidth: true,
  },
});
