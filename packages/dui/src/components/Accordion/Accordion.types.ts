import { VariantProps } from 'tailwind-variants';
import * as RadixAccordion from '@radix-ui/react-accordion';
import {
  accordionRootVariants,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants,
  accordionChevronVariants,
} from './Accordion.styles';

// Base interface for shared props
interface AccordionBaseProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof RadixAccordion.Root>,
      'type' | 'value' | 'defaultValue'
    >,
    VariantProps<typeof accordionRootVariants> {
  /**
   * The items to display in the accordion.
   */
  items?: {
    /**
     * Unique identifier for the item.
     */
    value: string;
    /**
     * The header of the item.
     */
    header: React.ReactNode;
    /**
     * The content of the item.
     */
    content: React.ReactNode;
    /**
     * Whether the item is disabled.
     */
    disabled?: boolean;
  }[];
}

// Single type accordion
export interface AccordionSingleProps extends AccordionBaseProps {
  /**
   * The type of accordion.
   */
  type: 'single';
  /**
   * The controlled value of the accordion item to expand.
   */
  value?: string;
  /**
   * The default value of the accordion item to expand.
   */
  defaultValue?: string;
}

// Multiple type accordion
export interface AccordionMultipleProps extends AccordionBaseProps {
  /**
   * The type of accordion.
   */
  type: 'multiple';
  /**
   * The controlled values of the accordion items to expand.
   */
  value?: string[];
  /**
   * The default values of the accordion items to expand.
   */
  defaultValue?: string[];
}

// Union type for the component props
export type AccordionProps =
  | AccordionSingleProps
  | AccordionMultipleProps
  | (Omit<AccordionBaseProps, 'type'> & {
      /**
       * The type of accordion.
       * @default 'multiple'
       */
      type?: 'single' | 'multiple';
      /**
       * The controlled value(s) of the accordion item(s) to expand.
       */
      value?: string | string[];
      /**
       * The default value(s) of the accordion item(s) to expand.
       */
      defaultValue?: string | string[];
    });

export interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>,
    VariantProps<typeof accordionItemVariants> {}

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>,
    VariantProps<typeof accordionTriggerVariants> {
  /**
   * Whether to show the chevron icon.
   * @default true
   */
  icon?: boolean;
}

export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixAccordion.Content>,
    VariantProps<typeof accordionContentVariants> {}

export interface AccordionChevronProps
  extends React.SVGAttributes<SVGElement>,
    VariantProps<typeof accordionChevronVariants> {}
