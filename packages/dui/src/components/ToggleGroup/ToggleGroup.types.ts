import { VariantProps } from 'tailwind-variants';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import { toggleGroupVariants } from './ToggleGroup.styles';

export interface ToggleGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadixToggleGroup.Root>,
    VariantProps<typeof toggleGroupVariants> {
  /**
   * The variant of the toggle group
   * @default 'default'
   */
  variant?: 'default' | 'outline' | 'ghost';

  /**
   * The orientation of the toggle group
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The size of the toggle items
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The shape of the toggle items
   * @default 'default'
   */
  shape?: 'default' | 'square' | 'pill';
}

export interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadixToggleGroup.Item> {
  /**
   * The value of the toggle group item
   */
  value: string;

  /**
   * Whether the toggle item is disabled
   */
  disabled?: boolean;

  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
}
