import { VariantProps } from 'tailwind-variants';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import {
  alertDialogContentVariants,
  alertDialogDescriptionVariants,
  alertDialogFooterVariants,
  alertDialogOverlayVariants,
  alertDialogTitleVariants,
} from './AlertDialog.styles';

export type AlertDialogProps = RadixAlertDialog.AlertDialogProps;

export type AlertDialogTriggerProps = RadixAlertDialog.AlertDialogTriggerProps;

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

export type AlertDialogOverlayProps = RadixAlertDialog.AlertDialogOverlayProps &
  VariantProps<typeof alertDialogOverlayVariants>;

export type AlertDialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export type AlertDialogFooterProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertDialogFooterVariants>;

export type AlertDialogTitleProps = RadixAlertDialog.AlertDialogTitleProps &
  VariantProps<typeof alertDialogTitleVariants>;

export type AlertDialogDescriptionProps = RadixAlertDialog.AlertDialogDescriptionProps &
  VariantProps<typeof alertDialogDescriptionVariants>;

export type AlertDialogActionProps = RadixAlertDialog.AlertDialogActionProps;

export type AlertDialogCancelProps = RadixAlertDialog.AlertDialogCancelProps;

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
  actionVariant?: 'primary' | 'destructive' | 'outline' | 'ghost' | 'secondary';

  /**
   * Callback fired when the action button is clicked.
   */
  onAction?: () => void;

  /**
   * Callback fired when the cancel button is clicked.
   */
  onCancel?: () => void;
}
