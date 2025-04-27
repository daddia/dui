import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import { cn } from '../../utils/cn';
import {
  dialogCloseVariants,
  dialogContentVariants,
  dialogDescriptionVariants,
  dialogFooterVariants,
  dialogOverlayVariants,
  dialogTitleVariants,
} from './Dialog.styles';
import type {
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogOverlayProps,
  DialogPortalProps,
  DialogRootProps,
  DialogTitleProps,
  DialogTriggerProps,
} from './Dialog.types';

// Root Dialog Component
const DialogRoot = (props: DialogRootProps) => {
  return <DialogPrimitive.Root {...props} />;
};
DialogRoot.displayName = 'DialogRoot';

// Dialog Trigger Component
const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  DialogTriggerProps
>(({ asChild = false, ...props }, ref) => {
  return <DialogPrimitive.Trigger ref={ref} asChild={asChild} {...props} />;
});
DialogTrigger.displayName = 'DialogTrigger';

// Dialog Portal Component
const DialogPortal = ({ container, ...props }: DialogPortalProps) => {
  return <DialogPrimitive.Portal container={container} {...props} />;
};
DialogPortal.displayName = 'DialogPortal';

// Dialog Overlay Component
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  DialogOverlayProps
>(({ className, asChild = false, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(dialogOverlayVariants(), className)}
      asChild={asChild}
      {...props}
    />
  );
});
DialogOverlay.displayName = 'DialogOverlay';

// Dialog Close Component
const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  DialogCloseProps
>(({ className, asChild = false, ...props }, ref) => {
  return (
    <DialogPrimitive.Close
      ref={ref}
      className={cn(dialogCloseVariants(), className)}
      asChild={asChild}
      {...props}
    />
  );
});
DialogClose.displayName = 'DialogClose';

// Dialog Content Component
const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  (
    {
      className,
      children,
      size = 'lg',
      showCloseButton = true,
      closeOnClickOutside = true,
      closeOnEscape = true,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    return (
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          ref={ref}
          onInteractOutside={closeOnClickOutside ? undefined : (e) => e.preventDefault()}
          onEscapeKeyDown={closeOnEscape ? undefined : (e) => e.preventDefault()}
          className={cn(dialogContentVariants({ size }), className)}
          asChild={asChild}
          {...props}
        >
          {children}
          {showCloseButton && (
            <DialogClose>
              <Cross2Icon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          )}
        </DialogPrimitive.Content>
      </DialogPortal>
    );
  },
);
DialogContent.displayName = 'DialogContent';

// Dialog Header Component
const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : 'div';
    return (
      <Comp
        ref={ref}
        className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
        {...props}
      />
    );
  },
);
DialogHeader.displayName = 'DialogHeader';

// Dialog Footer Component
const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : 'div';
    return <Comp ref={ref} className={cn(dialogFooterVariants(), className)} {...props} />;
  },
);
DialogFooter.displayName = 'DialogFooter';

// Dialog Title Component
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogTitleProps
>(({ className, asChild = false, ...props }, ref) => {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(dialogTitleVariants(), className)}
      asChild={asChild}
      {...props}
    />
  );
});
DialogTitle.displayName = 'DialogTitle';

// Dialog Description Component
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, asChild = false, ...props }, ref) => {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn(dialogDescriptionVariants(), className)}
      asChild={asChild}
      {...props}
    />
  );
});
DialogDescription.displayName = 'DialogDescription';

// Export as a composite component
export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
});
