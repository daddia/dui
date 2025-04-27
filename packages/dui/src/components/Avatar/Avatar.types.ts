import * as React from 'react';
import { VariantProps } from 'tailwind-variants';
import * as RadixAvatar from '@radix-ui/react-avatar';
import {
  avatarVariants,
  avatarImageVariants,
  avatarFallbackVariants,
  avatarGroupVariants,
} from './Avatar.styles';

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof RadixAvatar.Root>,
    VariantProps<typeof avatarVariants> {
  /**
   * The size of the avatar
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * The status indicator of the avatar
   */
  status?: 'online' | 'offline' | 'busy' | 'away';

  /**
   * The initials to display when the image fails to load or if no image is provided
   */
  initials?: string;

  /**
   * The URL of the avatar image
   */
  src?: string;

  /**
   * The alt text for the avatar image
   */
  alt?: string;
}

export interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof RadixAvatar.Image>,
    VariantProps<typeof avatarImageVariants> {}

export interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof RadixAvatar.Fallback>,
    VariantProps<typeof avatarFallbackVariants> {
  /**
   * The delay in milliseconds before the fallback is shown
   * @default 500
   */
  delayMs?: 0 | 500 | 1000;
}

export interface AvatarGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarGroupVariants> {
  /**
   * The size of the avatars in the group
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Max number of avatars to display
   */
  max?: number;

  /**
   * Border size around avatars
   * @default '2px'
   */
  border?: string;

  /**
   * The label for the "more" avatar
   */
  moreLabel?: string;
}
