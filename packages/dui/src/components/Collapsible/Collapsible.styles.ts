import { tv } from 'tailwind-variants';

export const collapsibleVariants = tv({
  base: '',
});

export const collapsibleTriggerVariants = tv({
  base: 'flex w-full items-center justify-between rounded-md p-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const collapsibleContentVariants = tv({
  base: 'overflow-hidden text-sm transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
});
