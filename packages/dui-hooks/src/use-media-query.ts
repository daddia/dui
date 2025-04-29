import { useEffect, useState } from 'react';
import { useServerHandoffComplete } from './use-server-handoff-complete';

/**
 * Hook to detect if a media query matches
 *
 * @param query - CSS media query string
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const serverHandoffComplete = useServerHandoffComplete();
  const [matches, setMatches] = useState(() => {
    if (!serverHandoffComplete) {
      return false;
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (!serverHandoffComplete) {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQuery.matches);

    updateMatches();
    mediaQuery.addEventListener('change', updateMatches);

    return () => {
      mediaQuery.removeEventListener('change', updateMatches);
    };
  }, [query, serverHandoffComplete]);

  return matches;
}
