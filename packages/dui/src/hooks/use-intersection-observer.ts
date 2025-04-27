function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options?: IntersectionObserverInit,
): IntersectionObserverEntry | null {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => setEntry(entry), options);

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [elementRef, options]);

  return entry;
}
