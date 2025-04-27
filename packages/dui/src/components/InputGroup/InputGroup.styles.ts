import { tv } from 'tailwind-variants';

export const inputGroupVariants = tv({
  base: [
    'relative isolate block w-full',
    'has-[[data-slot=icon]:first-child]:[&_input]:pl-10 has-[[data-slot=icon]:last-child]:[&_input]:pr-10',
    '*[data-slot=icon]:pointer-events-none *[data-slot=icon]:absolute *[data-slot=icon]:top-1/2 *[data-slot=icon]:-translate-y-1/2 *[data-slot=icon]:z-10 *[data-slot=icon]:size-5',
    '[&>[data-slot=icon]:first-child]:left-3 [&>[data-slot=icon]:last-child]:right-3',
    '*[data-slot=icon]:text-muted-foreground',
  ],
});
