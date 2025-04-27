import { tv } from 'tailwind-variants';

export const accordionRootVariants = tv({
  base: 'w-full',
});

export const accordionItemVariants = tv({
  base: 'border-b',
});

export const accordionTriggerVariants = tv({
  base: [
    'flex w-full items-center justify-between py-4 text-sm font-medium transition-all',
    'hover:underline',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2',
    'data-[state=open]:text-primary',
  ],
  variants: {
    icon: {
      true: 'group',
    },
  },
});

export const accordionChevronVariants = tv({
  base: [
    'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
    'group-data-[state=open]:rotate-180',
  ],
});

export const accordionContentVariants = tv({
  base: [
    'overflow-hidden text-sm',
    'data-[state=closed]:animate-accordion-up',
    'data-[state=open]:animate-accordion-down',
  ],
});
