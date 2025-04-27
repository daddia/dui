import { useCallback, useState } from 'react';

export function useFlags(initialFlags = 0) {
  const [flags, setFlags] = useState(initialFlags);

  const setFlag = useCallback((flag: number) => setFlags(flag), []);

  const addFlag = useCallback((flag: number) => setFlags((prevFlags) => prevFlags | flag), []);
  const hasFlag = useCallback((flag: number) => (flags & flag) === flag, [flags]);
  const removeFlag = useCallback((flag: number) => setFlags((prevFlags) => prevFlags & ~flag), []);
  const toggleFlag = useCallback((flag: number) => setFlags((prevFlags) => prevFlags ^ flag), []);

  return { flags, setFlag, addFlag, hasFlag, removeFlag, toggleFlag };
}
