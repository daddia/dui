import React, { forwardRef } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils';
import { CollapsibleContentProps, CollapsibleProps, CollapsibleTriggerProps } from './Collapsible.types';
import {
  collapsibleContentVariants,
  collapsibleTriggerVariants,
  collapsibleVariants
} from './Collapsible.styles';

const Collapsible = forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleProps
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.Root
    ref={ref}
    className={collapsibleVariants({ className })}
    {...props}
  >
    {children}
  </CollapsiblePrimitive.Root>
));

Collapsible.displayName = 'Collapsible';

const CollapsibleTrigger = forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  CollapsibleTriggerProps
>(({ className, children, icon, ...props }, ref) => (
  <CollapsiblePrimitive.Trigger
    ref={ref}
    className={collapsibleTriggerVariants({ className })}
    {...props}
  >
    {children}
    {icon || <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />}
  </CollapsiblePrimitive.Trigger>
));

CollapsibleTrigger.displayName = 'CollapsibleTrigger';

const CollapsibleContent = forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  CollapsibleContentProps
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={collapsibleContentVariants({ className })}
    {...props}
  >
    <div className="p-4 pt-0">{children}</div>
  </CollapsiblePrimitive.Content>
));

CollapsibleContent.displayName = 'CollapsibleContent';

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
