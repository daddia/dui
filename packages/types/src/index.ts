import * as React from 'react';

// disable automatic export
export {};

// --------------------------------------------------------
// Type Expansion and Simplification
// --------------------------------------------------------

/**
 * Recursive expansion of object types
 */
export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

/**
 * Simplifies the display of a type (without modifying it).
 */
export type Simplify<T> = T extends (...args: unknown[]) => unknown ? T : { [K in keyof T]: T[K] };

// --------------------------------------------------------
// React Component Props
// --------------------------------------------------------

/**
 * Simplified React component props without ref
 */
export type Props<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;

// --------------------------------------------------------
// Polymorphic Component Types
// --------------------------------------------------------

/**
 * Helper type for polymorphic components that can render as different HTML elements
 */
export type PolymorphicRef<Element extends React.ElementType> =
  React.ComponentPropsWithRef<Element>['ref'];

/**
 * Basic polymorphic props without ref
 */
export type PolymorphicProps<
  Element extends React.ElementType,
  Props = Record<string, unknown>,
> = Props & {
  as?: Element;
} & Omit<React.ComponentPropsWithoutRef<Element>, 'as' | keyof Props>;

/**
 * Full polymorphic component props with ref support
 */
export type PolymorphicComponentProps<
  Element extends React.ElementType,
  Props = Record<string, unknown>,
> = PolymorphicProps<Element, Props> & {
  ref?: PolymorphicRef<Element>;
};

// --------------------------------------------------------
// Type Manipulation Utilities
// --------------------------------------------------------

/**
 * Remove properties `K` from `T`.
 * Distributive for union types.
 */
export type DistributiveOmit<T, K extends string | number | symbol> = T extends unknown
  ? Omit<T, K>
  : never;

/**
 * Like `T & U`, but using the value types from `U` where their properties overlap.
 */
export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;

/**
 * Makes specified properties required in a type
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: T[P];
};

/**
 * Makes specified properties optional in a type
 */
export type OptionalBy<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P];
};

// --------------------------------------------------------
// Type Comparison and Testing
// --------------------------------------------------------

/**
 * Tests if two types are exactly equal
 */
export type IsEqual<T, U, Y = true, N = false> =
  (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2 ? Y : N;

/**
 * Issues a type error if `Expected` is not identical to `Actual`.
 */
export declare function expectType<Expected, Actual>(
  actual: IsEqual<Actual, Expected, Actual, never>,
): void;

// --------------------------------------------------------
// Common UI Types
// --------------------------------------------------------

/**
 * Common sizes used throughout the component library
 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Common variants for components
 */
export type Variant = 'filled' | 'outlined' | 'text' | 'contained' | 'ghost';

/**
 * Common status states
 */
export type Status = 'info' | 'warning' | 'error' | 'success';

/**
 * Value that can be different at different breakpoints
 */
export type ResponsiveValue<T> = T | { [breakpoint: string]: T };

/**
 * Standard breakpoints
 */
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// --------------------------------------------------------
// Event handler types
// --------------------------------------------------------

/**
 * Generic event handler type
 */
export type EventHandler<E = Event> = (event: E) => void;

/**
 * Typed change handler
 */
export type ChangeHandler<T = string> = (value: T) => void;
