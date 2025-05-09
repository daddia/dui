import React from 'react';

export const startTransition =
  // Prefer React's `startTransition` if it's available.
  React.startTransition ??
  function startTransition(cb: () => void) {
    cb();
  };
