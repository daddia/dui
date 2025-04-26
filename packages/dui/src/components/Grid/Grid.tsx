import { forwardRef } from 'react';
import { GridProps } from './Grid.types';
import { gridStyles } from './Grid.styles';
import { cn } from '../../utils/cn';

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, columns, gap, align, justify, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(gridStyles({ columns, gap, align, justify }), className)}
        {...props}
      />
    );
  },
);

Grid.displayName = 'Grid';
