type Entries = [string, string][];

export function objectToFormEntries(
  source: Record<string, unknown> = {},
  parentKey: string | null = null,
  entries: Entries = [],
): Entries {
  for (const [key, value] of Object.entries(source)) {
    append(entries, composeKey(parentKey, key), value);
  }

  return entries;
}

function composeKey(parent: string | null, key: string): string {
  return parent ? parent + '[' + key + ']' : key;
}

function append(entries: Entries, key: string, value: unknown): void {
  if (Array.isArray(value)) {
    for (const [subkey, subvalue] of value.entries()) {
      append(entries, composeKey(key, subkey.toString()), subvalue);
    }
  } else if (value instanceof Date) {
    entries.push([key, value.toISOString()]);
  } else if (typeof value === 'boolean') {
    entries.push([key, value ? '1' : '0']);
  } else if (typeof value === 'string') {
    entries.push([key, value]);
  } else if (typeof value === 'number') {
    entries.push([key, `${value}`]);
  } else if (value === null || value === undefined) {
    entries.push([key, '']);
  } else if (typeof value === 'object') {
    objectToFormEntries(value as Record<string, unknown>, key, entries);
  }
}

export function attemptSubmit(elementInForm: HTMLElement) {
  // Safe cast to access form property which may exist on some element types
  const formElement = (elementInForm as { form?: HTMLFormElement }).form;
  const form = formElement ?? elementInForm.closest('form');

  if (!form) return;

  for (const element of Array.from(form.elements)) {
    if (element === elementInForm) continue;

    if (
      (element.tagName === 'INPUT' && (element as HTMLInputElement).type === 'submit') ||
      (element.tagName === 'BUTTON' && (element as HTMLButtonElement).type === 'submit') ||
      (element.nodeName === 'INPUT' && (element as HTMLInputElement).type === 'image')
    ) {
      // If you press `enter` in a normal input[type='text'] field, then the form will submit by
      // searching for the a submit element and "click" it. We could also use the
      // `form.requestSubmit()` function, but this has a downside where an `event.preventDefault()`
      // inside a `click` listener on the submit button won't stop the form from submitting.
      (element as HTMLElement).click();
      return;
    }
  }

  // If we get here, then there is no submit button in the form. We can use the
  // `form.requestSubmit()` function to submit the form instead. We cannot use `form.submit()`
  // because then the `submit` event won't be fired and `onSubmit` listeners won't be fired.
  form.requestSubmit?.();
}
