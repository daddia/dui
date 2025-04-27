import { tv } from 'tailwind-variants';

export const switchVariants = tv({
  base: [
    'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent',
    'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  variants: {
    size: {
      sm: 'h-5 w-9',
      md: 'h-6 w-11',
      lg: 'h-7 w-14',
    },
    variant: {
      default: ['data-[state=checked]:bg-primary', 'data-[state=unchecked]:bg-input'],
      primary: ['data-[state=checked]:bg-primary', 'data-[state=unchecked]:bg-input'],
      success: ['data-[state=checked]:bg-success', 'data-[state=unchecked]:bg-input'],
      danger: ['data-[state=checked]:bg-danger', 'data-[state=unchecked]:bg-input'],
      warning: ['data-[state=checked]:bg-warning', 'data-[state=unchecked]:bg-input'],
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    disabled: false,
  },
});

export const switchThumbVariants = tv({
  base: [
    'pointer-events-none block rounded-full bg-background',
    'shadow-lg ring-0 transition-transform',
    'data-[state=checked]:translate-x-full data-[state=unchecked]:translate-x-0',
  ],
  variants: {
    size: {
      sm: 'h-3.5 w-3.5',
      md: 'h-4.5 w-4.5',
      lg: 'h-5.5 w-5.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const switchContainerVariants = tv({
  base: ['flex items-center gap-3'],
  variants: {
    labelPosition: {
      left: 'flex-row-reverse',
      right: 'flex-row',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: '',
    },
  },
  defaultVariants: {
    labelPosition: 'right',
    disabled: false,
  },
});

export const switchLabelVariants = tv({
  base: [
    'text-sm font-medium leading-none',
    'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-70',
  ],
});

export const switchDescriptionVariants = tv({
  base: [
    'text-sm text-muted-foreground',
    'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-70',
  ],
});
