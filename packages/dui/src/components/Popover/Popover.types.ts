import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { VariantProps } from 'tailwind-variants';
import { popoverContentVariants } from './Popover.styles';

// Root Props
export interface PopoverRootProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {
  /**
   * The open state of the popover when it is initially rendered.
   * Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the popover.
   * Must be used in conjunction with onOpenChange.
   */
  open?: boolean;

  /**
   * Event handler called when the open state of the popover changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * The modality of the popover.
   * When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.
   */
  modal?: boolean;
}

// Trigger Props
export interface PopoverTriggerProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {
  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
}

// Event types
export interface PointerDownOutsideEvent extends CustomEvent<{ originalEvent: PointerEvent }> {
  preventDefault: () => void;
}

export interface FocusOutsideEvent extends CustomEvent<{ originalEvent: FocusEvent }> {
  preventDefault: () => void;
}

// Content Props
export interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
    VariantProps<typeof popoverContentVariants> {
  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * When true, hover/focus/click interactions will be disabled on elements outside
   * the popover. Users will need to click outside twice to dismiss the popover.
   */
  disableOutsidePointerEvents?: boolean;

  /**
   * Event handler called when the escape key is down.
   * Can be prevented by calling event.preventDefault.
   */
  onEscapeKeyDown?: (event: KeyboardEvent) => void;

  /**
   * Event handler called when the a pointer event happens outside of the popover.
   * Can be prevented by calling event.preventDefault.
   */
  onPointerDownOutside?: (event: PointerDownOutsideEvent) => void;

  /**
   * Event handler called when focus moves outside of the popover.
   * Can be prevented by calling event.preventDefault.
   */
  onFocusOutside?: (event: FocusOutsideEvent) => void;

  /**
   * Event handler called when an interaction happens outside the popover.
   * Specifically, when a pointer event happens outside of the popover, when the escape key is pressed,
   * or when focus moves outside of it. Can be prevented by calling event.preventDefault.
   */
  onInteractOutside?: (event: PointerDownOutsideEvent | FocusOutsideEvent) => void;

  /**
   * The preferred side of the trigger to render against when open.
   * Will be reversed when collisions occur and avoidCollisions is enabled.
   * @default "bottom"
   */
  side?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * The distance in pixels from the trigger.
   * @default 5
   */
  sideOffset?: number;

  /**
   * The preferred alignment against the trigger.
   * May change when collisions occur.
   * @default "center"
   */
  align?: 'start' | 'center' | 'end';

  /**
   * An offset in pixels from the "start" or "end" alignment options.
   * @default 0
   */
  alignOffset?: number;

  /**
   * When true, overrides the side and align preferences
   * to prevent collisions with boundary edges.
   * @default true
   */
  avoidCollisions?: boolean;

  /**
   * Optional prop to show a close button within the popover
   * @default false
   */
  showCloseButton?: boolean;
}

// Arrow Props
export interface PopoverArrowProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow> {
  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The width of the arrow in pixels.
   * @default 10
   */
  width?: number;

  /**
   * The height of the arrow in pixels.
   * @default 5
   */
  height?: number;
}

// Close Props
export interface PopoverCloseProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close> {
  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
}
