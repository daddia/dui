import * as React from 'react';
import { cn } from '../../utils/cn';
import type { HeadingProps } from './Heading.types';

export const Subheading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, children, ...props }, ref) => {
    const Element = React.createElement(
      `h${level}`,
      {
        className: cn(
          'text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white',
          className,
        ),
        ref,
        ...props,
      },
      children,
    );

    return Element;
  },
);

Subheading.displayName = 'Subheading';
