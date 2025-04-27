import { VariantProps } from 'tailwind-variants';
import { buttonGroupVariants } from './ButtonGroup.styles';

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {
  /**
   * The visual variant of the button group.
   * When set, all child buttons will inherit this variant.
   */
  variant?: 'default' | 'outline' | 'ghost';

  /**
   * The orientation of the buttons.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The spacing between buttons.
   * @default 'xs'
   */
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg';

  /**
   * Whether the buttons in the group should be attached together.
   * @default false
   */
  attached?: boolean;

  /**
   * The size to apply to all buttons in the group.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * If true, all buttons in the group will take full width.
   */
  fullWidth?: boolean;
}
