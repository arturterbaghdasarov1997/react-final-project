import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchPhotos } from '../api/service';

export const useUnsplashSearch = (query: string, page: number) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  return useQuery(
    ['photos', debouncedQuery, page],
    () => fetchPhotos(debouncedQuery, page),
    {
      staleTime: 100 * 60 * 5,
      keepPreviousData: true,
      onError: (error: Error) => console.error(error),
    }
  );
};
