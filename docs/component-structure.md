# Component Structure Guidelines

This document outlines the standard folder and file structure for each component in our Radix UI + Tailwind CSS library. Follow these guidelines to ensure consistency, maintainability, and optimal performance.

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

### 2.2 `Component.types.ts`
```ts
import type { VariantProps } from 'tailwind-variants';
import { componentVariants } from './Component.styles';

export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
          VariantProps<typeof componentVariants> {}
```
- Houses all prop and variant interfaces.  
- Simplifies type imports when extending or composing components.

### 2.3 `Component.tsx`
```tsx
import * as React from 'react';
import * as RadixComponent from '@radix-ui/react-component';
import { componentVariants } from './Component.styles';
import type { ComponentProps } from './Component.types';

export const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, ...props }, ref) => (
    <RadixComponent.Root
      {...props}
      ref={ref}
      className={componentVariants({ className })}
    />
  )
);
Component.displayName = 'Component';
```
- Wraps the corresponding Radix primitive.  
- Applies CVA styles and forwards native attributes.

### 2.4 `Component.stories.tsx`
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './Component';

const meta: Meta<typeof Component> = {
  title: 'Components/Component',
  component: Component,
  argTypes: { /* variant controls */ },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = { args: { /* default props */ } };
```
- Provides interactive examples for Storybook.  
- Facilitates visual testing and documentation.

### 2.5 `Component.test.tsx`
```tsx
import { render, screen } from '@testing-library/react';
import { Component } from './Component';

test('renders default state', () => {
  render(<Component>Content</Component>);
  expect(screen.getByText('Content')).toBeInTheDocument();
});
```
- Contains unit and integration tests.  
- Ensures regressions are caught early in CI.

### 2.6 `index.ts`
```ts
export { Component } from './Component';
export type { ComponentProps } from './Component.types';
```
- Defines the public API for the component.  
- Consumers import from `@your-lib/components/Component`.

---

## 3. Why This Structure Works

1. **Tree‑shakable & Optimised**  
   Only the styles and code you import end up in the final bundle.

2. **Consistent Typing**  
   All prop and variant types live in a single file per component.

3. **Rapid Visual Iteration**  
   Storybook stories are co‑located with code, speeding up design reviews.

4. **Robust Testing**  
   Component‑specific tests ensure each module works independently.

5. **Clear Public API**  
   A single `index.ts` file per component makes imports predictable.

---

## 4. Applying to Other Components

Replicate this pattern for every component, adjusting the Radix primitive import and variant names as appropriate. Consistency across folders enhances discoverability and maintenance.

---

Thank you for contributing! Consistently following these guidelines will keep our library maintainable, performant, and developer‑friendly.

