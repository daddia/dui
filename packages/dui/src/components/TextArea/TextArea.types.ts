import { VariantProps } from 'class-variance-authority';
import { textAreaVariants } from './TextArea.styles';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  /**
   * Error message to display below the textarea
   */
  error?: string;
  /**
   * Success message to display below the textarea
   */
  success?: string;
  /**
   * Helper text to display below the textarea
   */
  helperText?: string;
  /**
   * Class name to apply to the wrapper div
   */
  wrapperClassName?: string;
  /**
   * Show character count
   */
  showCount?: boolean;
  /**
   * Disabled state of the textarea
   */
  disabled?: boolean;
  /**
   * Required state of the textarea
   */
  required?: boolean;
  /**
   * If `true`, the component will merge its props onto its child
   */
  asChild?: boolean;
}
