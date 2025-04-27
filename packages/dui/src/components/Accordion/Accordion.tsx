import * as React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import {
  accordionRootVariants,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants,
  accordionChevronVariants,
} from './Accordion.styles';
import {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
  AccordionChevronProps,
} from './Accordion.types';
import { cn } from '@/lib/utils';

const AccordionChevron = React.forwardRef<SVGSVGElement, AccordionChevronProps>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      ref={ref}
      className={cn(accordionChevronVariants(), className)}
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
);
AccordionChevron.displayName = 'AccordionChevron';

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Content>,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <RadixAccordion.Content
    ref={ref}
    className={cn(accordionContentVariants(), className)}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </RadixAccordion.Content>
));
AccordionContent.displayName = 'AccordionContent';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Trigger>,
  AccordionTriggerProps
>(({ className, children, icon = true, ...props }, ref) => (
  <RadixAccordion.Header className="flex">
    <RadixAccordion.Trigger
      ref={ref}
      className={cn(accordionTriggerVariants({ icon }), className)}
      {...props}
    >
      {children}
      {icon && <AccordionChevron aria-hidden />}
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  AccordionItemProps
>(({ className, ...props }, ref) => (
  <RadixAccordion.Item ref={ref} className={cn(accordionItemVariants(), className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const Accordion = React.forwardRef<React.ElementRef<typeof RadixAccordion.Root>, AccordionProps>(
  ({ className, items, children, ...props }, ref) => (
    <RadixAccordion.Root ref={ref} className={cn(accordionRootVariants(), className)} {...props}>
      {items
        ? items.map((item) => (
            <AccordionItem key={item.value} value={item.value} disabled={item.disabled}>
              <AccordionTrigger>{item.header}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))
        : children}
    </RadixAccordion.Root>
  ),
);
Accordion.displayName = 'Accordion';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, AccordionChevron };
