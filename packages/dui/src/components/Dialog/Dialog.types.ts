import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

// Base props for all dialog components
export interface DialogBaseProps {
  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
}

// Props for the root Dialog component
export interface DialogRootProps extends DialogPrimitive.DialogProps {}

// Props for the DialogTrigger component
export interface DialogTriggerProps extends DialogPrimitive.DialogTriggerProps, DialogBaseProps {}

// Props for the DialogPortal component
export interface DialogPortalProps extends DialogPrimitive.DialogPortalProps, DialogBaseProps {
  /**
   * The container element to portal the content into.
   */
  container?: HTMLElement;
}

// Props for the DialogClose component
export interface DialogCloseProps extends DialogPrimitive.DialogCloseProps, DialogBaseProps {
  /**
   * Custom className to be applied to the component
   */
  className?: string;
}

// Props for the DialogOverlay component
export interface DialogOverlayProps extends DialogPrimitive.DialogOverlayProps, DialogBaseProps {
  /**
   * Custom className to be applied to the component
   */
  className?: string;
}

// Props for the DialogContent component
export interface DialogContentProps
  extends DialogPrimitive.DialogContentProps,
    DialogBaseProps,
    React.RefAttributes<HTMLDivElement> {
  /**
   * Custom className to be applied to the component
   */
  className?: string;

  /**
   * Size of the dialog
   * @default "lg"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

  /**
   * When true, will disable the close functionality from the Escape key and dismiss button
   */
  forceMount?: boolean;

  /**
   * When true, will close the dialog when clicking outside of it
   * @default true
   */
  closeOnClickOutside?: boolean;

  /**
   * When true, will close the dialog when pressing the escape key
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Add a visual close button to the top-right corner of the dialog
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * Callback called when the dialog requests to be closed
   */
  onRequestClose?: () => void;
}

// Props for the DialogHeader component
export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement>, DialogBaseProps {}

// Props for the DialogFooter component
export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement>, DialogBaseProps {
  /**
   * Custom className to be applied to the component
   */
  className?: string;
}

// Props for the DialogTitle component
export interface DialogTitleProps extends DialogPrimitive.DialogTitleProps, DialogBaseProps {
  /**
   * Custom className to be applied to the component
   */
  className?: string;
}

// Props for the DialogDescription component
export interface DialogDescriptionProps
  extends DialogPrimitive.DialogDescriptionProps,
    DialogBaseProps {
  /**
   * Custom className to be applied to the component
   */
  className?: string;
}
