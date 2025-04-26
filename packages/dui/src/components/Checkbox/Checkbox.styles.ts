import { tv } from 'tailwind-variants';

export const checkboxVariants = tv({
  base: [
    'peer relative isolate inline-flex shrink-0 items-center justify-center border rounded',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring',
    'transition-colors duration-100',
    'disabled:opacity-50 disabled:pointer-events-none',
    // Background color + shadow applied to inset pseudo element
    'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.DEFAULT)-1px)] before:bg-background before:shadow-sm',
    // Inner highlight shadow
    'after:absolute after:inset-0 after:rounded-[calc(theme(borderRadius.DEFAULT)-1px)] after:shadow-[inset_0_1px_theme(colors.white/15%)]',
    // Dark mode adjustments
    'dark:border-border dark:before:bg-transparent dark:bg-white/5',
  ],
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
    color: {
      default: [
        'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary',
        'data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary',
        'hover:border-primary/50 data-[state=checked]:hover:bg-primary/90 data-[state=indeterminate]:hover:bg-primary/90',
        'dark:data-[state=checked]:border-primary dark:data-[state=indeterminate]:border-primary',
      ],
      zinc: [
        'data-[state=checked]:bg-zinc-800 data-[state=checked]:text-zinc-50 data-[state=checked]:border-zinc-900',
        'data-[state=indeterminate]:bg-zinc-800 data-[state=indeterminate]:text-zinc-50 data-[state=indeterminate]:border-zinc-900',
        'hover:border-zinc-700/50 data-[state=checked]:hover:bg-zinc-900 data-[state=indeterminate]:hover:bg-zinc-900',
        'dark:data-[state=checked]:bg-zinc-600 dark:data-[state=indeterminate]:bg-zinc-600 dark:data-[state=checked]:border-zinc-500',
      ],
      red: [
        'data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground data-[state=checked]:border-destructive',
        'data-[state=indeterminate]:bg-destructive data-[state=indeterminate]:text-destructive-foreground data-[state=indeterminate]:border-destructive',
        'hover:border-destructive/50 data-[state=checked]:hover:bg-destructive/90 data-[state=indeterminate]:hover:bg-destructive/90',
        'dark:data-[state=checked]:border-destructive dark:data-[state=indeterminate]:border-destructive',
      ],
      green: [
        'data-[state=checked]:bg-green-600 data-[state=checked]:text-green-50 data-[state=checked]:border-green-700',
        'data-[state=indeterminate]:bg-green-600 data-[state=indeterminate]:text-green-50 data-[state=indeterminate]:border-green-700',
        'hover:border-green-500/50 data-[state=checked]:hover:bg-green-700 data-[state=indeterminate]:hover:bg-green-700',
        'dark:data-[state=checked]:border-green-500 dark:data-[state=indeterminate]:border-green-500',
      ],
      amber: [
        'data-[state=checked]:bg-amber-400 data-[state=checked]:text-amber-950 data-[state=checked]:border-amber-500',
        'data-[state=indeterminate]:bg-amber-400 data-[state=indeterminate]:text-amber-950 data-[state=indeterminate]:border-amber-500',
        'hover:border-amber-400/50 data-[state=checked]:hover:bg-amber-500 data-[state=indeterminate]:hover:bg-amber-500',
        'dark:data-[state=checked]:border-amber-400 dark:data-[state=indeterminate]:border-amber-400',
      ],
      purple: [
        'data-[state=checked]:bg-purple-600 data-[state=checked]:text-purple-50 data-[state=checked]:border-purple-700',
        'data-[state=indeterminate]:bg-purple-600 data-[state=indeterminate]:text-purple-50 data-[state=indeterminate]:border-purple-700',
        'hover:border-purple-500/50 data-[state=checked]:hover:bg-purple-700 data-[state=indeterminate]:hover:bg-purple-700',
        'dark:data-[state=checked]:border-purple-500 dark:data-[state=indeterminate]:border-purple-500',
      ],
    },
  },
  defaultVariants: {
    size: 'md',
    fullWidth: false,
    color: 'default',
  },
});

export const checkboxLabelVariants = tv({
  base: [
    'text-sm font-medium leading-none text-foreground',
    'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed',
    'select-none',
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

export const checkboxWrapperVariants = tv({
  base: 'flex items-center gap-2',
  variants: {
    fullWidth: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export const checkboxIndicatorVariants = tv({
  base: 'flex items-center justify-center text-current',
  variants: {
    size: {
      sm: 'size-3',
      md: 'size-4',
      lg: 'size-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
