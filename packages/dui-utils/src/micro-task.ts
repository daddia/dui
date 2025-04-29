/**
 * Queues a function to be executed in the microtask queue,
 * which runs after the current task but before the next task
 */
export function microTask(cb: () => void): void {
  if (typeof queueMicrotask === 'function') {
    queueMicrotask(cb);
  } else {
    Promise.resolve()
      .then(cb)
      .catch((e) =>
        setTimeout(() => {
          throw e;
        }),
      );
  }
}
