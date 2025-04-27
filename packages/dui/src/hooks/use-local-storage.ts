import { useState } from 'react';

/**
 * Hook to persist state in localStorage
 *
 * @param key - The localStorage key
 * @param initialValue - Initial value to use if no value is found in localStorage
 * @returns A tuple with the current value and a setter function
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      // If there's an error (e.g., localStorage is unavailable or JSON is invalid)
      // just return the initial value
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}
