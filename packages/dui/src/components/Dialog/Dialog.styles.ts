import { tv } from 'tailwind-variants';

export const dialogOverlayVariants = tv({
  base: [
    'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  ],
});

export const dialogContentVariants = tv({
  base: [
    'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
    'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
    'sm:rounded-lg',
  ],
  variants: {
    size: {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      full: 'max-w-[calc(100%-2rem)]',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export const dialogTitleVariants = tv({
  base: 'text-lg font-semibold leading-none tracking-tight',
});

export const dialogDescriptionVariants = tv({
  base: 'text-sm text-muted-foreground',
});

export const dialogFooterVariants = tv({
  base: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
});

export const dialogCloseVariants = tv({
  base: [
    'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity',
    'hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    'disabled:pointer-events-none',
    'data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
  ],
});
