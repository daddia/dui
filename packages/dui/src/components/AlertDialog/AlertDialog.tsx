import * as React from 'react';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import {
  alertDialogContentVariants,
  alertDialogDescriptionVariants,
  alertDialogFooterVariants,
  alertDialogOverlayVariants,
  alertDialogTitleVariants,
} from './AlertDialog.styles';
import {
  AlertDialogTriggerProps,
  AlertDialogContentProps,
  AlertDialogOverlayProps,
  AlertDialogHeaderProps,
  AlertDialogFooterProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogActionProps,
  AlertDialogCancelProps,
  UseAlertDialogProps,
} from './AlertDialog.types';
import { cn } from '../../utils/cn';
import { Button } from '../Button';

const AlertDialogRoot = RadixAlertDialog.Root;

const AlertDialogTrigger = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Trigger>,
  AlertDialogTriggerProps
>(({ className, children, ...props }, ref) => (
  <RadixAlertDialog.Trigger ref={ref} className={cn(className)} {...props}>
    {children}
  </RadixAlertDialog.Trigger>
));
AlertDialogTrigger.displayName = 'AlertDialogTrigger';

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Overlay>,
  AlertDialogOverlayProps
>(({ className, ...props }, ref) => (
  <RadixAlertDialog.Overlay
    ref={ref}
    className={cn(alertDialogOverlayVariants(), className)}
    {...props}
  />
));
AlertDialogOverlay.displayName = 'AlertDialogOverlay';

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Content>,
  AlertDialogContentProps
>(({ className, size, children, ...props }, ref) => (
  <RadixAlertDialog.Portal>
    <AlertDialogOverlay />
    <RadixAlertDialog.Content
      ref={ref}
      className={cn(alertDialogContentVariants({ size }), className)}
      {...props}
    >
      {children}
    </RadixAlertDialog.Content>
  </RadixAlertDialog.Portal>
));
AlertDialogContent.displayName = 'AlertDialogContent';

const AlertDialogHeader = React.forwardRef<HTMLDivElement, AlertDialogHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mb-2 flex flex-col space-y-1.5 text-left', className)}
      {...props}
    />
  ),
);
AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogFooter = React.forwardRef<HTMLDivElement, AlertDialogFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(alertDialogFooterVariants(), className)} {...props} />
  ),
);
AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Title>,
  AlertDialogTitleProps
>(({ className, ...props }, ref) => (
  <RadixAlertDialog.Title
    ref={ref}
    className={cn(alertDialogTitleVariants(), className)}
    {...props}
  />
));
AlertDialogTitle.displayName = 'AlertDialogTitle';

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Description>,
  AlertDialogDescriptionProps
>(({ className, ...props }, ref) => (
  <RadixAlertDialog.Description
    ref={ref}
    className={cn(alertDialogDescriptionVariants(), className)}
    {...props}
  />
));
AlertDialogDescription.displayName = 'AlertDialogDescription';

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Action>,
  AlertDialogActionProps
>(({ className, ...props }, ref) => (
  <RadixAlertDialog.Action ref={ref} className={cn(className)} {...props} />
));
AlertDialogAction.displayName = 'AlertDialogAction';

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Cancel>,
  AlertDialogCancelProps
>(({ className, ...props }, ref) => (
  <RadixAlertDialog.Cancel ref={ref} className={cn(className)} {...props} />
));
AlertDialogCancel.displayName = 'AlertDialogCancel';

// Composed alert dialog
export function useAlertDialog({
  title,
  description,
  cancelText = 'Cancel',
  actionText = 'Continue',
  actionVariant = 'destructive',
  onAction,
  onCancel,
}: UseAlertDialogProps) {
  const [open, setOpen] = React.useState(false);

  const AlertDialog = React.useCallback(
    ({ children }: { children: React.ReactNode }) => {
      return (
        <AlertDialogRoot open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{title}</AlertDialogTitle>
              <AlertDialogDescription>{description}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="outline" onClick={onCancel}>
                  {cancelText}
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button variant={actionVariant} onClick={onAction}>
                  {actionText}
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogRoot>
      );
    },
    [open, title, description, cancelText, actionText, actionVariant, onAction, onCancel],
  );

  return {
    open,
    setOpen,
    AlertDialog,
  };
}

export {
  AlertDialogRoot as AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
