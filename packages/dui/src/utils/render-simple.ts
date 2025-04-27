import {
  forwardRef,
  type ElementType,
  type MutableRefObject,
  type ReactElement,
  type Ref,
} from 'react';
import type { Props } from '../types';

// Basic utility for merging props
export function mergeProps<T extends Record<string, any>[]>(...listOfProps: T) {
  if (listOfProps.length === 0) return {};
  if (listOfProps.length === 1) return listOfProps[0];

  const target: Record<string, any> = {};
  const eventHandlers: Record<string, ((...args: any[]) => void | undefined)[]> = {};

  for (const props of listOfProps) {
    for (const prop in props) {
      // Merge event listeners
      if (prop.startsWith('on') && typeof props[prop] === 'function') {
        eventHandlers[prop] ??= [];
        eventHandlers[prop].push(props[prop]);
      } else {
        // Override incoming prop
        target[prop] = props[prop];
      }
    }
  }

  // Merge event handlers
  for (const eventName in eventHandlers) {
    Object.assign(target, {
      [eventName](...args: any[]) {
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
export function mergeRefs<T = any>(
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
  return Object.assign(forwardRef(component as any) as any, {
    displayName: component.displayName ?? component.name,
  });
}

// Remove properties from an object
export function omit<T extends Record<any, any>>(object: T, keysToOmit: string[] = []) {
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
export function getElementRef(element: ReactElement | null): Ref<any> | null {
  if (element == null) return null;

  // Typescript doesn't allow direct access to ref property as it's not part of the public API
  // Instead, use a safe cast to access it
  const elementWithRef = element as unknown as { ref?: Ref<any> };
  return elementWithRef.ref ?? null;
}

// Class name utility
export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}
