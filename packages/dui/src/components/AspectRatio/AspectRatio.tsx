import * as React from 'react';
import * as RadixAspectRatio from '@radix-ui/react-aspect-ratio';
import { aspectRatioVariants } from './AspectRatio.styles';
import { AspectRatioProps } from './AspectRatio.types';
import { cn } from '@/lib/utils';

export const AspectRatio = React.forwardRef<
  React.ElementRef<typeof RadixAspectRatio.Root>,
  AspectRatioProps
>(({ className, ratio = 1, children, ...props }, ref) => {
  return (
    <div className={cn(aspectRatioVariants(), className)}>
      <RadixAspectRatio.Root ratio={ratio} ref={ref} {...props}>
        {children}
      </RadixAspectRatio.Root>
    </div>
  );
});

AspectRatio.displayName = 'AspectRatio';
