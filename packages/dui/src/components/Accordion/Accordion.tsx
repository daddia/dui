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
  AccordionSingleProps,
  AccordionMultipleProps,
} from './Accordion.types';
import { cn } from '../../utils/cn';

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

// Single accordion implementation
const SingleAccordion = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Root>,
  Omit<AccordionSingleProps, 'type'>
>(({ className, value, defaultValue, onValueChange, ...restProps }, ref) => (
  <RadixAccordion.Root
    ref={ref}
    type="single"
    className={cn(accordionRootVariants(), className)}
    value={value}
    defaultValue={defaultValue}
    onValueChange={onValueChange as (value: string) => void}
    {...restProps}
  />
));

// Multiple accordion implementation
const MultipleAccordion = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Root>,
  Omit<AccordionMultipleProps, 'type'>
>(({ className, value, defaultValue, onValueChange, ...restProps }, ref) => (
  <RadixAccordion.Root
    ref={ref}
    type="multiple"
    className={cn(accordionRootVariants(), className)}
    value={value}
    defaultValue={defaultValue}
    onValueChange={onValueChange as (value: string[]) => void}
    {...restProps}
  />
));

// Main accordion component that renders the right variant based on type
const Accordion = React.forwardRef<React.ElementRef<typeof RadixAccordion.Root>, AccordionProps>(
  ({ className, ...props }, ref) => {
    // Explicitly typed accordion
    if ('type' in props && props.type !== undefined) {
      if (props.type === 'single') {
        const { type, ...singleProps } = props as AccordionSingleProps;
        return <SingleAccordion ref={ref} className={className} {...singleProps} />;
      } else {
        const { type, ...multipleProps } = props as AccordionMultipleProps;
        return <MultipleAccordion ref={ref} className={className} {...multipleProps} />;
      }
    }

    // Default to multiple type when not specified
    // Handle the mixed type case by converting values to the right format
    const { value, defaultValue, onValueChange, ...restProps } = props;

    // Convert value and defaultValue to arrays for multiple type
    const multipleValue = Array.isArray(value) ? value : value ? [value] : undefined;
    const multipleDefaultValue = Array.isArray(defaultValue)
      ? defaultValue
      : defaultValue
        ? [defaultValue]
        : undefined;

    // Use type assertion to safely pass properly formatted props
    const multipleProps = {
      value: multipleValue,
      defaultValue: multipleDefaultValue,
      onValueChange: onValueChange as ((value: string[]) => void) | undefined,
      ...restProps,
    } as Omit<AccordionMultipleProps, 'type'>;

    return <MultipleAccordion ref={ref} className={className} {...multipleProps} />;
  },
);

Accordion.displayName = 'Accordion';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, AccordionChevron };
