import { VariantProps } from 'tailwind-variants';
import * as RadixToggle from '@radix-ui/react-toggle';
import { toggleVariants } from './Toggle.styles';

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof RadixToggle.Root>,
    VariantProps<typeof toggleVariants> {
  /**
   * The variant of the toggle
   * @default 'default'
   */
  variant?: 'default' | 'outline' | 'ghost';

  /**
   * The size of the toggle
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The shape of the toggle
   * @default 'default'
   */
  shape?: 'default' | 'square' | 'pill';

  /**
   * Whether the toggle is pressed
   */
  pressed?: boolean;

  /**
   * Icon to display when the toggle is on
   */
  onIcon?: React.ReactNode;

  /**
   * Icon to display when the toggle is off
   */
  offIcon?: React.ReactNode;

  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
}
