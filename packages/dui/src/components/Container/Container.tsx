import {forwardRef} from 'react';
import {ContainerProps} from './Container.types';
import {containerStyles} from './Container.styles';
import {cn} from '../../utils/cn';

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({className, maxWidth, centered, padded, ...props}, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerStyles({maxWidth, centered, padded}), className)}
        {...props}
      />
    );
  },
);

Container.displayName = 'Container';
