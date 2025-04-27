import { VariantProps } from 'tailwind-variants';
import * as RadixAccordion from '@radix-ui/react-accordion';
import {
  accordionRootVariants,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants,
  accordionChevronVariants,
} from './Accordion.styles';

export interface AccordionProps
  extends React.ComponentPropsWithoutRef<typeof RadixAccordion.Root>,
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
