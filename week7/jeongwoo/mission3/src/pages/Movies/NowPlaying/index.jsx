import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNowPlaying } from '../../../api/movieApi';
import MovieList from '../../../components/MovieList';

const NowPlaying = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData
  } = useQuery({
    queryKey: ['movies', 'now-playing', page],
    queryFn: () => fetchNowPlaying({ page }),
    keepPreviousData: true
  });

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <MovieList
      title="현재 상영 중"
      movies={data?.data.results}
      isLoading={isLoading}
      isFetching={isFetching}
      currentPage={page}
      totalPages={data?.data.total_pages}
      onPageChange={handlePageChange}
    />
  );
};

export default NowPlaying;