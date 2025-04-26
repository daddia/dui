import * as React from 'react';
import { cn } from '../../utils/cn';

export interface TextLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  /**
   * The content to display
   */
  children: React.ReactNode;
}

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          'text-zinc-950 underline decoration-zinc-950/50 hover:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:hover:decoration-white',
          className,
        )}
        {...props}
      >
        {children}
      </a>
    );
  },
);

TextLink.displayName = 'TextLink';
