import * as React from 'react';
import {headingVariants} from './Heading.styles';
import type {HeadingProps} from './Heading.types';
import {cn} from '../../utils/cn';

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({className, level = 1, size, weight, align, truncate, children, ...props}, ref) => {
    const Element = React.createElement(
      `h${level}`,
      {
        className: cn(
          headingVariants({
            size,
            weight,
            align,
            truncate,
          }),
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

Heading.displayName = 'Heading';
