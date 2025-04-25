import * as React from 'react';
import {buttonVariants} from './Button.styles';
import type {ButtonLinkProps, ButtonProps} from './Button.types';
import {cn} from '../../utils/cn';
import {Text} from '../Text/Text';

/**
 * Expand the hit area to at least 44×44px on touch devices
 */
const TouchTarget = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <span
        className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
        aria-hidden="true"
      />
      {children}
    </>
  );
};
TouchTarget.displayName = 'TouchTarget';

const ButtonInner = ({
  leftIcon,
  rightIcon,
  isLoading,
  children,
  size,
}: Pick<ButtonProps, 'leftIcon' | 'rightIcon' | 'isLoading' | 'children' | 'size'>) => {
  // Map button size to text size
  const textSize = {
    xs: 'xs',
    sm: 'sm',
    md: 'base',
    lg: 'lg',
  }[size || 'md'] as 'xs' | 'sm' | 'base' | 'lg';

  return (
    <>
      {isLoading && (
        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
      <Text size={textSize} weight="medium" className="inline-flex items-center">
        {children}
      </Text>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );
};
ButtonInner.displayName = 'ButtonInner';

const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      color,
      leftIcon,
      rightIcon,
      fullWidth,
      isLoading,
      children,
      disabled,
      plain,
      asChild,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;

    // Adjust variant if plain is set
    const buttonVariant = plain ? 'plain' : variant;

    const Comp = asChild ? 'button' : 'button'; // We'll implement Slot functionality directly

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant: buttonVariant,
            size,
            color,
            fullWidth,
          }),
          className,
        )}
        disabled={isDisabled}
        ref={ref}
        {...props}
      >
        <TouchTarget>
          <ButtonInner leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} size={size}>
            {children}
          </ButtonInner>
        </TouchTarget>
      </Comp>
    );
  },
);
ButtonComponent.displayName = 'ButtonComponent';

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      className,
      variant,
      size,
      color,
      leftIcon,
      rightIcon,
      fullWidth,
      isLoading,
      children,
      disabled,
      plain,
      href,
      asChild,
      ...props
    },
    ref,
  ) => {
    // Adjust variant if plain is set
    const buttonVariant = plain ? 'plain' : variant;

    const Comp = asChild ? 'a' : 'a'; // We'll implement Slot functionality directly

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant: buttonVariant,
            size,
            color,
            fullWidth,
            isLink: true,
          }),
          disabled || isLoading ? 'pointer-events-none opacity-50' : '',
          className,
        )}
        href={href}
        ref={ref}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <TouchTarget>
          <ButtonInner leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading} size={size}>
            {children}
          </ButtonInner>
        </TouchTarget>
      </Comp>
    );
  },
);
ButtonLink.displayName = 'ButtonLink';

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps | ButtonLinkProps
>((props, ref) => {
  if ('href' in props && props.href) {
    return (
      <ButtonLink
        {...(props as ButtonLinkProps)}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      />
    );
  }
  return (
    <ButtonComponent
      {...(props as ButtonProps)}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
    />
  );
});

Button.displayName = 'Button';
