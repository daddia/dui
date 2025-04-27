import { VariantProps } from 'tailwind-variants';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import { toggleGroupVariants } from './ToggleGroup.styles';

// Base interface with common properties
interface ToggleGroupBaseProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof RadixToggleGroup.Root>,
      'type' | 'value' | 'defaultValue' | 'onValueChange'
    >,
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

  /**
   * The children of the toggle group
   */
  children?: React.ReactNode;

  /**
   * Class name to be applied to the toggle group
   */
  className?: string;
}

// Single type toggle group
export interface ToggleGroupSingleProps extends ToggleGroupBaseProps {
  /**
   * The type of the toggle group
   */
  type: 'single';

  /**
   * The controlled value of the toggle group
   */
  value?: string;

  /**
   * The default value of the toggle group
   */
  defaultValue?: string;

  /**
   * Callback fired when the value changes
   */
  onValueChange?: (value: string) => void;
}

// Multiple type toggle group
export interface ToggleGroupMultipleProps extends ToggleGroupBaseProps {
  /**
   * The type of the toggle group
   */
  type: 'multiple';

  /**
   * The controlled values of the toggle group
   */
  value?: string[];

  /**
   * The default values of the toggle group
   */
  defaultValue?: string[];

  /**
   * Callback fired when the values change
   */
  onValueChange?: (value: string[]) => void;
}

// Union type that allows for either single or multiple
export type ToggleGroupProps =
  | ToggleGroupSingleProps
  | ToggleGroupMultipleProps
  | (ToggleGroupBaseProps & {
      /**
       * The type of the toggle group
       * @default 'multiple'
       */
      type?: 'single' | 'multiple';

      /**
       * The controlled value(s) of the toggle group
       */
      value?: string | string[];

      /**
       * The default value(s) of the toggle group
       */
      defaultValue?: string | string[];

      /**
       * Callback fired when the value(s) change
       */
      onValueChange?: ((value: string) => void) | ((value: string[]) => void);
    });

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
