import React from 'react';
import { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { VariantProps } from 'class-variance-authority';
import { collapsibleContentVariants, collapsibleTriggerVariants, collapsibleVariants } from './Collapsible.styles';

export interface CollapsibleProps extends
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>,
  VariantProps<typeof collapsibleVariants> {
  /**
   * Controlled open state of the collapsible
   */
  open?: boolean;
  /**
   * Event handler called when the open state of the collapsible changes
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Whether the collapsible is disabled
   */
  disabled?: boolean;
  /** Optional CSS class to add to the component */
  className?: string;
  /** The content to be rendered inside the collapsible */
  children: React.ReactNode;
  asChild?: boolean;
}

export interface CollapsibleTriggerProps extends
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>,
  VariantProps<typeof collapsibleTriggerVariants> {
  /**
   * The content of the trigger
   */
  children: ReactNode;
  /** Optional CSS class to add to the trigger */
  className?: string;
  /** Icon to display at the end of the trigger */
  icon?: React.ReactNode;
  asChild?: boolean;
  disabled?: boolean;
}

export interface CollapsibleContentProps extends
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>,
  VariantProps<typeof collapsibleContentVariants> {
  /**
   * The content that will be rendered when the collapsible is open
   */
  children: ReactNode;
  /** Optional CSS class to add to the content */
  className?: string;
  asChild?: boolean;
}
