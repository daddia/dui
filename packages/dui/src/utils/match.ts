export function match<
  TValue extends string | number = string,
  TReturnValue = unknown,
  TArgs extends unknown[] = [],
>(
  value: TValue,
  lookup: Record<TValue, TReturnValue | ((...args: TArgs) => TReturnValue)>,
  ...args: TArgs
): TReturnValue {
  if (value in lookup) {
    const returnValue = lookup[value];
    return (typeof returnValue === 'function' ? returnValue(...args) : returnValue) as TReturnValue;
  }

  const error = new Error(
    `Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      lookup,
    )
      .map((key) => `"${key}"`)
      .join(', ')}.`,
  );
  if (Error.captureStackTrace) Error.captureStackTrace(error, match);
  throw error;
}
