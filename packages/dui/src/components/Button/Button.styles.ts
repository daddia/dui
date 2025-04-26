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
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 focus-visible:ring-gray-500',
      ghost: 'bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500',
      destructive: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
      solid: [
        'border-transparent bg-opacity-90',
        'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.md)-1px)]',
        'before:shadow-sm',
        'after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.md)-1px)]',
        'after:shadow-[inset_0_1px_theme(colors.white/15%)]',
        'hover:after:bg-white/5 active:after:bg-white/10',
      ],
      plain: 'border-transparent bg-transparent hover:bg-gray-100 active:bg-gray-200',
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
    },
    color: {
      default: '',
      zinc: 'text-white bg-zinc-600 border-zinc-700/90 hover:after:bg-white/10',
      indigo: 'text-white bg-indigo-500 border-indigo-600/90 hover:after:bg-white/10',
      cyan: 'text-cyan-950 bg-cyan-300 border-cyan-400/80 hover:after:bg-white/25',
      red: 'text-white bg-red-600 border-red-700/90 hover:after:bg-white/10',
      orange: 'text-white bg-orange-500 border-orange-600/90 hover:after:bg-white/10',
      amber: 'text-amber-950 bg-amber-400 border-amber-500/80 hover:after:bg-white/25',
      yellow: 'text-yellow-950 bg-yellow-300 border-yellow-400/80 hover:after:bg-white/25',
      lime: 'text-lime-950 bg-lime-300 border-lime-400/80 hover:after:bg-white/25',
      green: 'text-white bg-green-600 border-green-700/90 hover:after:bg-white/10',
      emerald: 'text-white bg-emerald-600 border-emerald-700/90 hover:after:bg-white/10',
      teal: 'text-white bg-teal-600 border-teal-700/90 hover:after:bg-white/10',
      sky: 'text-white bg-sky-500 border-sky-600/80 hover:after:bg-white/10',
      blue: 'text-white bg-blue-600 border-blue-700/90 hover:after:bg-white/10',
      violet: 'text-white bg-violet-500 border-violet-600/90 hover:after:bg-white/10',
      purple: 'text-white bg-purple-500 border-purple-600/90 hover:after:bg-white/10',
      fuchsia: 'text-white bg-fuchsia-500 border-fuchsia-600/90 hover:after:bg-white/10',
      pink: 'text-white bg-pink-500 border-pink-600/90 hover:after:bg-white/10',
      rose: 'text-white bg-rose-500 border-rose-600/90 hover:after:bg-white/10',
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
      variant: 'solid',
      color: 'default',
      class: 'text-white bg-zinc-900 border-zinc-950/90 hover:after:bg-white/10',
    },
  ],
});
