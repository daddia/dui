import type { VariantProps } from 'tailwind-variants';
import { inputIconVariants } from './InputIcon.styles';

export interface InputIconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof inputIconVariants> {}
