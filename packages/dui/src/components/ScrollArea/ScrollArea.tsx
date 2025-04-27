import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from '../../utils/cn';
import {
  scrollAreaVariants,
  scrollAreaViewportVariants,
  scrollAreaScrollbarVariants,
  scrollAreaThumbVariants,
  scrollAreaCornerVariants,
} from './ScrollArea.styles';
import type {
  ScrollAreaProps,
  ScrollAreaViewportProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaCornerProps,
} from './ScrollArea.types';

const ScrollAreaRoot = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(
  (
    {
      className,
      children,
      scrollbarSize = 'md',
      orientation = 'both',
      scrollHideDelay = 600,
      disabled = false,
      maxHeight,
      maxWidth,
      height,
      width,
      rounded = true,
      alwaysVisible = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    return (
      <ScrollAreaPrimitive.Root
        ref={ref}
        className={cn(scrollAreaVariants({ disabled }), className)}
        type={scrollHideDelay === 0 ? 'always' : 'auto'}
        scrollHideDelay={scrollHideDelay}
        asChild={asChild}
        {...props}
      >
        <ScrollAreaViewport
          disabled={disabled}
          style={{
            maxHeight,
            maxWidth,
            height,
            width,
          }}
        >
          {children}
        </ScrollAreaViewport>

        {/* Only render scrollbars if not disabled */}
        {!disabled && (
          <>
            {(orientation === 'vertical' || orientation === 'both') && (
              <ScrollAreaScrollbar
                orientation="vertical"
                size={scrollbarSize}
                visible={alwaysVisible}
              >
                <ScrollAreaThumb rounded={rounded} size={scrollbarSize} />
              </ScrollAreaScrollbar>
            )}

            {(orientation === 'horizontal' || orientation === 'both') && (
              <ScrollAreaScrollbar
                orientation="horizontal"
                size={scrollbarSize}
                visible={alwaysVisible}
              >
                <ScrollAreaThumb rounded={rounded} size={scrollbarSize} />
              </ScrollAreaScrollbar>
            )}

            {orientation === 'both' && <ScrollAreaCorner />}
          </>
        )}
      </ScrollAreaPrimitive.Root>
    );
  },
);
ScrollAreaRoot.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollAreaViewport = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Viewport>,
  ScrollAreaViewportProps & {
    disabled?: boolean;
    style?: React.CSSProperties;
  }
>(({ className, asChild = false, disabled = false, style, ...props }, ref) => (
  <ScrollAreaPrimitive.Viewport
    ref={ref}
    className={cn(scrollAreaViewportVariants({ disabled }), className)}
    style={style}
    asChild={asChild}
    {...props}
  />
));
ScrollAreaViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;

const ScrollAreaScrollbar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Scrollbar>,
  ScrollAreaScrollbarProps & {
    size?: 'sm' | 'md' | 'lg';
    visible?: boolean;
  }
>(({ className, orientation, size = 'md', visible = false, asChild = false, ...props }, ref) => (
  <ScrollAreaPrimitive.Scrollbar
    ref={ref}
    className={cn(scrollAreaScrollbarVariants({ size, visible }), className)}
    orientation={orientation}
    asChild={asChild}
    {...props}
  />
));
ScrollAreaScrollbar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

const ScrollAreaThumb = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Thumb>,
  ScrollAreaThumbProps & {
    rounded?: boolean;
    size?: 'sm' | 'md' | 'lg';
  }
>(({ className, rounded = true, size = 'md', asChild = false, ...props }, ref) => (
  <ScrollAreaPrimitive.Thumb
    ref={ref}
    className={cn(scrollAreaThumbVariants({ rounded, size }), className)}
    asChild={asChild}
    {...props}
  />
));
ScrollAreaThumb.displayName = ScrollAreaPrimitive.Thumb.displayName;

const ScrollAreaCorner = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Corner>,
  ScrollAreaCornerProps
>(({ className, asChild = false, ...props }, ref) => (
  <ScrollAreaPrimitive.Corner
    ref={ref}
    className={cn(scrollAreaCornerVariants(), className)}
    asChild={asChild}
    {...props}
  />
));
ScrollAreaCorner.displayName = ScrollAreaPrimitive.Corner.displayName;

export const ScrollArea = Object.assign(ScrollAreaRoot, {
  Viewport: ScrollAreaViewport,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
});
