import {forwardRef} from 'react';
import {FlexProps} from './Flex.types';
import {flexStyles} from './Flex.styles';
import {cn} from '../../utils/cn';

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({className, direction, wrap, gap, align, justify, ...props}, ref) => {
    return (
      <div
        ref={ref}
        className={cn(flexStyles({direction, wrap, gap, align, justify}), className)}
        {...props}
      />
    );
  },
);

Flex.displayName = 'Flex';
