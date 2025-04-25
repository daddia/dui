import * as React from 'react';
import {cn} from '../../utils/cn';

export interface TextCodeProps extends React.ComponentPropsWithoutRef<'code'> {
  /**
   * The content to display
   */
  children: React.ReactNode;
}

export const TextCode = React.forwardRef<HTMLElement, TextCodeProps>(
  ({className, children, ...props}, ref) => {
    return (
      <code
        ref={ref}
        className={cn(
          'rounded-sm border border-zinc-950/10 bg-zinc-950/[2.5%] px-0.5 text-sm font-medium text-zinc-950 sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white',
          className,
        )}
        {...props}
      >
        {children}
      </code>
    );
  },
);

TextCode.displayName = 'TextCode';
