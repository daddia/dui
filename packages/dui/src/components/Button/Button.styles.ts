import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center rounded-md font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    'relative isolate',
  ],
  variants: {
    variant: {
      primary:
        'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/25',
      secondary:
        'bg-secondary text-secondary-foreground hover:bg-secondary/90 focus-visible:ring-secondary/25',
      outline:
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent/25',
      ghost:
        'bg-transparent hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent/25',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/25',
      solid: [
        'border-transparent bg-opacity-90',
        'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.md)-1px)]',
        'before:shadow-sm',
        'after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.md)-1px)]',
        'after:shadow-[inset_0_1px_theme(colors.white/15%)]',
        'hover:after:bg-white/5 active:after:bg-white/10',
      ],
      plain: 'border-transparent bg-transparent hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'h-9 px-4 py-2 has-[>svg]:px-3',
      sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
      md: 'h-9 px-4 py-2 has-[>svg]:px-3',
      lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
      icon: 'size-9',
    },
    color: {
      default: '',
      zinc: 'text-white bg-zinc-600 border-zinc-700/90 hover:after:bg-white/10',
      indigo: 'text-white bg-indigo-500 border-indigo-600/90 hover:after:bg-white/10',
      cyan: 'text-cyan-950 bg-cyan-300 border-cyan-400/80 hover:after:bg-white/25',
      red: 'text-destructive-foreground bg-destructive border-destructive/90 hover:after:bg-white/10',
      orange: 'text-orange-50 bg-orange-500 border-orange-600/90 hover:after:bg-white/10',
      amber: 'text-amber-950 bg-amber-400 border-amber-500/80 hover:after:bg-white/25',
      yellow: 'text-yellow-950 bg-yellow-300 border-yellow-400/80 hover:after:bg-white/25',
      lime: 'text-lime-950 bg-lime-300 border-lime-400/80 hover:after:bg-white/25',
      green: 'text-green-50 bg-green-600 border-green-700/90 hover:after:bg-white/10',
      emerald: 'text-emerald-50 bg-emerald-600 border-emerald-700/90 hover:after:bg-white/10',
      teal: 'text-teal-50 bg-teal-600 border-teal-700/90 hover:after:bg-white/10',
      sky: 'text-sky-50 bg-sky-500 border-sky-600/80 hover:after:bg-white/10',
      blue: 'text-primary-foreground bg-primary border-primary/90 hover:after:bg-white/10',
      violet: 'text-violet-50 bg-violet-500 border-violet-600/90 hover:after:bg-white/10',
      purple: 'text-purple-50 bg-purple-500 border-purple-600/90 hover:after:bg-white/10',
      fuchsia: 'text-fuchsia-50 bg-fuchsia-500 border-fuchsia-600/90 hover:after:bg-white/10',
      pink: 'text-pink-50 bg-pink-500 border-pink-600/90 hover:after:bg-white/10',
      rose: 'text-rose-50 bg-rose-500 border-rose-600/90 hover:after:bg-white/10',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
    isLink: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    isLink: false,
    color: 'default',
  },
  compoundVariants: [
    {
      variant: 'primary',
      size: 'default',
    },
  ],
});
