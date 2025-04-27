import { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';

export type ScrollbarSize = 'sm' | 'md' | 'lg';
export type ScrollOrientation = 'vertical' | 'horizontal' | 'both';

export interface ScrollAreaProps
  extends Omit<ComponentPropsWithoutRef<typeof RadixScrollArea.Root>, 'type'> {
  /**
   * The content to be scrolled
   */
  children: ReactNode;
  /**
   * The direction of the scrollable content
   * @default "vertical"
   */
  orientation?: ScrollOrientation;
  /**
   * The size of the scrollbar
   * @default "md"
   */
  scrollbarSize?: ScrollbarSize;
  /**
   * Whether scrolling is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Maximum height of the scroll area
   */
  maxHeight?: string;
  /**
   * Maximum width of the scroll area
   */
  maxWidth?: string;
  /**
   * The height of the scroll area
   */
  height?: string;
  /**
   * The width of the scroll area
   */
  width?: string;
  /**
   * Whether the scrollbar thumb should be rounded
   * @default true
   */
  rounded?: boolean;
  /**
   * Whether the scrollbars should be visible even when not scrolling
   * @default false
   */
  alwaysVisible?: boolean;
}

export type ScrollAreaRef = ElementRef<typeof RadixScrollArea.Root>;

export interface ScrollAreaViewportProps
  extends React.ComponentPropsWithoutRef<typeof RadixScrollArea.Viewport> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
}

export interface ScrollAreaScrollbarProps
  extends React.ComponentPropsWithoutRef<typeof RadixScrollArea.Scrollbar> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
}

export interface ScrollAreaThumbProps
  extends React.ComponentPropsWithoutRef<typeof RadixScrollArea.Thumb> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
}

export interface ScrollAreaCornerProps
  extends React.ComponentPropsWithoutRef<typeof RadixScrollArea.Corner> {
  /**
   * Whether to render the default slot as a JSX.Element
   * @default false
   */
  asChild?: boolean;
}
