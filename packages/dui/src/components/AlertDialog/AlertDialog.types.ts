import { VariantProps } from 'tailwind-variants';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import {
  alertDialogContentVariants,
  alertDialogDescriptionVariants,
  alertDialogFooterVariants,
  alertDialogOverlayVariants,
  alertDialogTitleVariants,
} from './AlertDialog.styles';

export interface AlertDialogProps extends RadixAlertDialog.AlertDialogProps {}

export interface AlertDialogTriggerProps extends RadixAlertDialog.AlertDialogTriggerProps {}

export interface AlertDialogContentProps
  extends RadixAlertDialog.AlertDialogContentProps,
    VariantProps<typeof alertDialogContentVariants> {
  /**
   * The size of the dialog.
   * @default 'lg'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

  /**
   * Override the container that receives the focus trap.
   * @default false
   */
  focusable?: boolean;
}

export interface AlertDialogOverlayProps
  extends RadixAlertDialog.AlertDialogOverlayProps,
    VariantProps<typeof alertDialogOverlayVariants> {}

export interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface AlertDialogFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertDialogFooterVariants> {}

export interface AlertDialogTitleProps
  extends RadixAlertDialog.AlertDialogTitleProps,
    VariantProps<typeof alertDialogTitleVariants> {}

export interface AlertDialogDescriptionProps
  extends RadixAlertDialog.AlertDialogDescriptionProps,
    VariantProps<typeof alertDialogDescriptionVariants> {}

export interface AlertDialogActionProps extends RadixAlertDialog.AlertDialogActionProps {}

export interface AlertDialogCancelProps extends RadixAlertDialog.AlertDialogCancelProps {}

export interface UseAlertDialogProps {
  /**
   * The title of the alert dialog.
   */
  title: React.ReactNode;

  /**
   * The description of the alert dialog.
   */
  description: React.ReactNode;

  /**
   * The text for the cancel button.
   * @default 'Cancel'
   */
  cancelText?: React.ReactNode;

  /**
   * The text for the action button.
   * @default 'Continue'
   */
  actionText?: React.ReactNode;

  /**
   * The variant of the action button.
   * @default 'destructive'
   */
  actionVariant?: 'default' | 'destructive' | 'outline' | 'ghost' | 'secondary';

  /**
   * Callback fired when the action button is clicked.
   */
  onAction?: () => void;

  /**
   * Callback fired when the cancel button is clicked.
   */
  onCancel?: () => void;
}
