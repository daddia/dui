import { VariantProps } from 'tailwind-variants';
import { textAreaVariants } from './TextArea.styles';

// Define the rows types explicitly
type TextAreaRowsType = 'default' | 'sm' | 'md' | 'lg' | 'xl';

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows'>,
    Omit<VariantProps<typeof textAreaVariants>, 'rows'> {
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
  /**
   * Number of rows or predefined size
   */
  rows?: number | TextAreaRowsType;
}
