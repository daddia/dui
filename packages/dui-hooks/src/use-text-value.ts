import { useCallback, useState } from 'react';
import { getTextValue } from '@dui/utils';

export function useTextValue(
  textValue?: ((value: string) => string) | string | null,
  forceTextValue = false,
) {
  const [textContent, setTextContent] = useState<string>('');

  const getTextProps = useCallback(() => {
    if (forceTextValue || textValue !== undefined) {
      return {
        'data-text-value':
          typeof textValue === 'function' ? textValue(textContent) : (textValue ?? textContent),
      };
    }

    return {
      onChange: (value: string) => setTextContent(value),
      getTextValue: (element: HTMLElement | null) => {
        if (!element) return '';
        return getTextValue(element);
      },
    };
  }, [textValue, textContent, forceTextValue]);

  return getTextProps;
}
