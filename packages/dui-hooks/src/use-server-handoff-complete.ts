import { useEffect, useState } from 'react';
import { env } from '@dui/utils';

const state = { handoffComplete: false };

function finished() {
  state.handoffComplete = true;
}

export function useServerHandoffComplete() {
  const [complete, setComplete] = useState(state.handoffComplete);

  useEffect(() => {
    if (complete) return;
    setComplete(true);
  }, [complete]);

  return env.isServer ? false : complete;
}
