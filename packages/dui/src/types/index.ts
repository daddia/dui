// Recursive expansion of object types
export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

// React component properties type
export type Props<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;

// Polymorphic component types
export type PolymorphicProps<
  Element extends React.ElementType,
  Props = Record<string, unknown>,
> = Props & {
  as?: Element;
} & Omit<React.ComponentPropsWithoutRef<Element>, 'as' | keyof Props>;

export type PolymorphicRef<Element extends React.ElementType> =
  React.ComponentPropsWithRef<Element>['ref'];

export type PolymorphicComponentProps<
  Element extends React.ElementType,
  Props = Record<string, unknown>,
> = PolymorphicProps<Element, Props> & {
  ref?: PolymorphicRef<Element>;
};
