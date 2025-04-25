import * as React from 'react';
import {paragraphVariants} from './Paragraph.styles';
import type {ParagraphProps} from './Paragraph.types';
import {cn} from '../../utils/cn';

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({className, size, weight, align, truncate, children, ...props}, ref) => {
    return (
      <p
        className={cn(
          paragraphVariants({
            size,
            weight,
            align,
            truncate,
          }),
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  },
);

Paragraph.displayName = 'Paragraph';
