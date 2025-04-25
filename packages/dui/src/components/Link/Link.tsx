import * as React from 'react';
import {linkVariants} from './Link.styles';
import type {LinkProps} from './Link.types';
import {cn} from '../../utils/cn';

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {className, children, href, external = false, size, weight, color, underline, ...props},
    ref,
  ) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          linkVariants({
            size,
            weight,
            color,
            underline,
            external,
          }),
          className,
        )}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = 'Link';
