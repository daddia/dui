import { VariantProps } from 'tailwind-variants';
import { aspectRatioVariants } from './AspectRatio.styles';
import * as RadixAspectRatio from '@radix-ui/react-aspect-ratio';

export interface AspectRatioProps
  extends React.ComponentPropsWithoutRef<typeof RadixAspectRatio.Root>,
    VariantProps<typeof aspectRatioVariants> {
  /**
   * The ratio of the width to the height of the element.
   * @default 1
   */
  ratio?: number;
}
