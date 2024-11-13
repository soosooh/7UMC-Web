import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchNowPlaying } from '../../../api/movieApi';
import MovieList from '../../../components/MovieList';

const NowPlaying = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: fetchNowPlaying,
    getNextPageParam: (lastPage) => {
      const totalPages = lastPage.data.total_pages;
      const nextPage = lastPage.data.page + 1;
      return nextPage <= totalPages ? nextPage : undefined;
    }
  });

  if (isError) return <div>Error: 데이터를 불러오는데 실패했습니다.</div>;

  const movies = data?.pages.flatMap(page => page.data.results) || [];

  return (
    <MovieList
      title="현재 상영 중"
      movies={movies}
      isLoading={isLoading}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default NowPlaying;