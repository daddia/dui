import { forwardRef, type ElementType, type MutableRefObject, type ReactElement } from 'react';
import type { Props } from '../types';

// Basic utility for merging props
export function mergeProps<T extends Record<string, unknown>[]>(...listOfProps: T) {
  if (listOfProps.length === 0) return {};
  if (listOfProps.length === 1) return listOfProps[0];

  const target: Record<string, unknown> = {};
  const eventHandlers: Record<string, ((...args: unknown[]) => void | undefined)[]> = {};

  for (const props of listOfProps) {
    for (const prop in props) {
      // Merge event listeners
      if (prop.startsWith('on') && typeof props[prop] === 'function') {
        eventHandlers[prop] ??= [];
        eventHandlers[prop].push(props[prop] as (...args: unknown[]) => void);
      } else {
        // Override incoming prop
        target[prop] = props[prop];
      }
    }
  }

  // Merge event handlers
  for (const eventName in eventHandlers) {
    Object.assign(target, {
      [eventName](...args: unknown[]) {
        const handlers = eventHandlers[eventName] || [];
        for (const handler of handlers) {
          handler?.(...args);
        }
      },
    });
  }

  return target;
}

// Simple utility for combining refs
export function mergeRefs<T = unknown>(
  ...refs: (MutableRefObject<T> | ((instance: T) => void) | null)[]
) {
  return (value: T): void => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}

// Type for element props
export type ElementProps<T extends ElementType> = Props<T>;

// Create a forwardRef component with displayName
export function forwardRefWithAs<T extends { name: string; displayName?: string }>(
  component: T,
): T & { displayName: string } {
  return Object.assign(forwardRef(component as unknown as React.ForwardRefRenderFunction<unknown, unknown>) as unknown as T, {
    displayName: component.displayName ?? component.name,
  });
}

// Remove properties from an object
export function omit<T extends Record<string, unknown>>(object: T, keysToOmit: string[] = []) {
  const result = {} as T;
  const keys = Object.keys(object) as (keyof T)[];

  for (const key of keys) {
    if (!keysToOmit.includes(key as string)) {
      result[key] = object[key];
    }
  }

  return result;
}

// Get the element ref from a React element
export function getElementRef(element: ReactElement | null) {
  if (element == null) return null;

  // React doesn't expose ref as a property, so we need to check for it safely
  const elementWithRef = element as unknown as { ref?: unknown };
  return elementWithRef.ref ?? null;
}

// Class name utility
export function combineClassNames(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}
