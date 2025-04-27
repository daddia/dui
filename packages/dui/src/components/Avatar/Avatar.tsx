import * as React from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';
import {
  avatarVariants,
  avatarImageVariants,
  avatarFallbackVariants,
  avatarGroupVariants,
} from './Avatar.styles';
import {
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
  AvatarGroupProps,
} from './Avatar.types';
import { cn } from '../../utils/cn';

/**
 * Get initials from a name
 */
function getInitials(name?: string): string {
  if (!name) return '';

  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

const AvatarImage = React.forwardRef<React.ElementRef<typeof RadixAvatar.Image>, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <RadixAvatar.Image ref={ref} className={cn(avatarImageVariants(), className)} {...props} />
  ),
);
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Fallback>,
  AvatarFallbackProps
>(({ className, delayMs, children, ...props }, ref) => (
  <RadixAvatar.Fallback
    ref={ref}
    className={cn(avatarFallbackVariants({ delayMs }), className)}
    delayMs={delayMs}
    {...props}
  >
    {children}
  </RadixAvatar.Fallback>
));
AvatarFallback.displayName = 'AvatarFallback';

const Avatar = React.forwardRef<React.ElementRef<typeof RadixAvatar.Root>, AvatarProps>(
  ({ className, size, status, src, alt, initials, ...props }, ref) => {
    const computedInitials = React.useMemo(() => {
      if (initials) return initials;
      if (alt) return getInitials(alt);
      return '';
    }, [initials, alt]);

    return (
      <RadixAvatar.Root
        ref={ref}
        className={cn(avatarVariants({ size, status }), className)}
        {...props}
      >
        {src && <AvatarImage src={src} alt={alt || ''} />}
        <AvatarFallback>{computedInitials}</AvatarFallback>
      </RadixAvatar.Root>
    );
  },
);
Avatar.displayName = 'Avatar';

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, size, max, border = '2px', moreLabel, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const hasOverflow = max !== undefined && childrenArray.length > max;
    const visibleChildren = hasOverflow ? childrenArray.slice(0, max) : childrenArray;
    const overflowCount = hasOverflow ? childrenArray.length - max! : 0;

    const avatarGroupStyle = {
      '--avatar-border': `${border} solid var(--background)`,
    } as React.CSSProperties;

    return (
      <div
        ref={ref}
        className={cn(avatarGroupVariants({ size }), className)}
        style={avatarGroupStyle}
        {...props}
      >
        {React.Children.map(visibleChildren, (child, i) => {
          if (!React.isValidElement(child)) return null;

          return React.cloneElement(child as React.ReactElement<AvatarProps>, {
            size,
            style: {
              zIndex: visibleChildren.length - i,
              // Add a white border to provide spacing between avatars
              boxShadow: `0 0 0 var(--avatar-border)`,
            },
          });
        })}

        {hasOverflow && (
          <Avatar
            size={size}
            style={{
              zIndex: 0,
              boxShadow: `0 0 0 var(--avatar-border)`,
            }}
          >
            <AvatarFallback>{moreLabel || `+${overflowCount}`}</AvatarFallback>
          </Avatar>
        )}
      </div>
    );
  },
);
AvatarGroup.displayName = 'AvatarGroup';

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup };
