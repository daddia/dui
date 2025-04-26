# Component Structure Guidelines

This document outlines the standard folder and file structure for each component in our Radix UI + Tailwind CSS library.

Follow these guidelines to ensure consistency, maintainability, and optimal performance.

---

## 1. Folder Structure

Each component should reside in its own directory under `src/components/`. Example for a Button:

```text
src/
└── components/
    └── Button/
        ├── Button.styles.ts     # CVA/Tailwind variants configuration
        ├── Button.types.ts      # Prop and variant type definitions
        ├── Button.tsx           # Component implementation
        ├── Button.stories.tsx   # Storybook examples
        ├── Button.test.tsx      # Jest + React Testing Library tests
        └── index.ts             # Public re‑exports
```

> **Note:** This pattern applies to all Radix primitives (Dialog, Dropdown, Tabs, etc.).

---

## 2. File Breakdown

### 2.1 `Component.styles.ts`

- Define your Tailwind CSS variants using [tailwind-variants (CVA)](https://github.com/adrianhall/tailwind-variants).
- Centralises CSS logic for sizes, intents, and other variants.
- Enables tree‑shaking of unused style permutations.
- Include compound variants for complex style combinations.
- **Always use Tailwind CSS theme tokens instead of hardcoded color values** for better theming capabilities and dark mode support.
- Define a comprehensive set of color variants for consistent theming.

#### Styling Rules:

1. **Use Tailwind Theme Tokens**: Always use semantic tokens like `bg-primary`, `text-foreground`, `border-border` rather than direct color values like `bg-blue-600`, `text-gray-900`.
2. **Theming Support**: Use token pairs like `bg-primary`/`text-primary-foreground` for proper contrast in all themes.
3. **Opacity Modifiers**: Utilize opacity modifiers for hover/focus states (e.g., `hover:bg-primary/90`).
4. **Dark Mode**: The theme tokens automatically handle dark mode, so avoid explicit dark mode classes when using tokens.
5. **Semantic Design Tokens**: Use tokens that describe purpose, not appearance:
   - `primary`/`secondary`/`accent`/`muted` for UI hierarchy
   - `destructive` for error/warning states
   - `background`/`foreground` for base text/backgrounds
   - `ring` for focus indicators

Example:

```ts
export const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center rounded-md font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    'relative isolate',
  ],
  variants: {
    variant: {
      primary:
        'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/25',
      secondary:
        'bg-secondary text-secondary-foreground hover:bg-secondary/90 focus-visible:ring-secondary/25',
      outline:
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent/25',
      ghost:
        'bg-transparent hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent/25',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/25',
      // ... other variants
    },
    color: {
      default: '',
      // Ensure colors also use theme tokens when appropriate
      blue: 'text-primary-foreground bg-primary border-primary/90 hover:after:bg-white/10',
      red: 'text-destructive-foreground bg-destructive border-destructive/90 hover:after:bg-white/10',
      // ... other colors
    },
    // ... other variants
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    // ... other defaults
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'default',
      class: 'text-background bg-foreground border-foreground/90 hover:after:bg-white/10',
    },
  ],
});
```

### 2.2 `Component.types.ts`

```ts
import type { VariantProps } from 'tailwind-variants';
import { componentVariants } from './Component.styles';

export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  /**
   * Optional element to render inside the component before the children
   */
  leftIcon?: React.ReactNode;

  /**
   * Optional element to render inside the component after the children
   */
  rightIcon?: React.ReactNode;

  /**
   * If true, the component will take the full width of its container
   */
  fullWidth?: boolean;

  /**
   * If true, the component will be rendered in a loading state
   */
  isLoading?: boolean;

  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
}
```

- Houses all prop and variant interfaces.
- Includes comprehensive JSDoc comments for better developer experience.
- Supports polymorphic components with `asChild` prop.
- Handles both button and link variants when applicable.

### 2.3 `Component.tsx`

```tsx
import * as React from 'react';
import { componentVariants } from './Component.styles';
import type { ComponentProps } from './Component.types';
import { cn } from '../../utils/cn';

// Sub-components for better organization
const ComponentInner = ({ leftIcon, rightIcon, isLoading, children }) => {
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );
};

const TouchTarget = ({ children }) => {
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

export const Component = React.forwardRef<HTMLElement, ComponentProps>(
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
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        className={cn(
          componentVariants({
            variant,
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
          <ComponentInner leftIcon={leftIcon} rightIcon={rightIcon} isLoading={isLoading}>
            {children}
          </ComponentInner>
        </TouchTarget>
      </button>
    );
  },
);
```

- Implements accessibility features like touch targets.
- Supports loading states with spinners.
- Handles icon placement (left/right).
- Uses compound components for better organization.
- Implements proper TypeScript types and ref forwarding.

### 2.4 `Component.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './Component';

const meta: Meta<typeof Component> = {
  title: 'Components/Component',
  component: Component,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'solid', 'plain'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['default', 'blue', 'red', 'green' /* ... */],
    },
    isLoading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

// ... other stories
```

- Provides comprehensive examples for all variants.
- Includes interactive controls for all props.
- Demonstrates compound variants and color options.
- Shows loading and disabled states.

### 2.5 `Component.test.tsx`

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Component } from './Component';

describe('Component', () => {
  test('renders children correctly', () => {
    render(<Component>Content</Component>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('applies variant classes correctly', () => {
    const { rerender } = render(<Component variant="primary">Primary</Component>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary');
    // ... test other variants
  });

  test('handles loading state correctly', () => {
    render(<Component isLoading>Loading</Component>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(screen.getByRole('button').querySelector('.animate-spin')).toBeInTheDocument();
  });

  // ... other tests
});
```

- Tests all variants and states.
- Verifies accessibility features.
- Tests event handlers and user interactions.
- Ensures proper class application.

### 2.6 `index.ts`

```ts
export { Component } from './Component';
export type { ComponentProps } from './Component.types';
```

- Defines the public API for the component.
- Exports both the component and its types.

---

## 3. Key Features to Implement

1. **Accessibility**

   - Touch targets for mobile devices
   - Proper ARIA attributes
   - Keyboard navigation support
   - Focus management

2. **Loading States**

   - Loading spinners
   - Disabled state during loading
   - Visual feedback

3. **Icon Support**

   - Left and right icon placement
   - Icon spacing and alignment
   - Icon-only variants

4. **Color System**

   - Use Tailwind CSS theme tokens for consistent theming
   - Support dark mode through theme tokens
   - Define semantic color roles (primary, secondary, etc.)
   - Implement appropriate color contrast ratios

5. **Responsive Design**

   - Mobile-first approach
   - Touch-friendly sizing
   - Responsive typography

6. **Type Safety**
   - Comprehensive TypeScript types
   - Proper prop validation
   - Polymorphic component support

---

## 4. Best Practices

1. **Component Organization**

   - Break down complex components into smaller sub-components
   - Use compound components for better composition
   - Keep related logic together

2. **Styling**

   - Use Tailwind's theme tokens consistently
   - Avoid hardcoded color values; use semantic tokens
   - Implement variants using CVA
   - Support dark mode through theme tokens
   - Use CSS variables for dynamic values

3. **Testing**

   - Test all variants and states
   - Verify accessibility features
   - Test user interactions
   - Ensure proper class application

4. **Documentation**
   - Comprehensive JSDoc comments
   - Clear prop descriptions
   - Example usage in stories
   - Accessibility guidelines

---

Thank you for contributing! Consistently following these guidelines will keep our library maintainable, performant, and developer‑friendly.
