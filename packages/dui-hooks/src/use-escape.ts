import { Keys } from './keyboard';
import { useEventListener } from './use-event-listener';
import { useIsTopLayer } from './use-is-top-layer';

export function useEscape(
  enabled: boolean,
  view = typeof document !== 'undefined' ? document.defaultView : null,
  cb: (event: KeyboardEvent) => void,
) {
  const isTopLayer = useIsTopLayer(enabled, 'escape');

  useEventListener(view, 'keydown', (event) => {
    if (!isTopLayer) return;
    if (event.defaultPrevented) return;
    if (event.key !== Keys.Escape) return;

    cb(event);
  });
}
