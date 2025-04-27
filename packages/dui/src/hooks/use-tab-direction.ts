import { useRef } from 'react';
import { useWindowEvent } from './use-window-event';

export enum Direction {
  Forwards,
  Backwards,
}

export function useTabDirection() {
  const direction = useRef(Direction.Forwards);
  const enabled = true;

  useWindowEvent(
    enabled,
    'keydown',
    (event) => {
      if (event.key === 'Tab') {
        direction.current = event.shiftKey ? Direction.Backwards : Direction.Forwards;
      }
    },
    true,
  );

  return direction;
}
