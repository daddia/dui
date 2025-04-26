import * as React from 'react';
import { cn } from '../../utils/cn';

export interface TextStrongProps extends React.ComponentPropsWithoutRef<'strong'> {
  /**
   * The content to display
   */
  children: React.ReactNode;
}

export const TextStrong = React.forwardRef<HTMLElement, TextStrongProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <strong
        ref={ref}
        className={cn('font-medium text-zinc-950 dark:text-white', className)}
        {...props}
      >
        {children}
      </strong>
    );
  },
);

TextStrong.displayName = 'TextStrong';
