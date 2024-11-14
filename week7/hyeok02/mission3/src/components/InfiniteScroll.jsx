import { useEffect, useRef } from 'react';

const useInfiniteScroll = (fetchNextPage, hasNextPage) => {
  const observerElem = useRef(null);

  useEffect(() => {
    if (!observerElem.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        });
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    observer.observe(observerElem.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  return observerElem;
};

export default useInfiniteScroll;
