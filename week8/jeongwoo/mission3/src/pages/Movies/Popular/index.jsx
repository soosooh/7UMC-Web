import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPopular } from '../../../api/movieApi';
import MovieList from '../../../components/MovieList';

const Popular = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData
  } = useQuery({
    queryKey: ['movies', 'popular', page],
    queryFn: () => fetchPopular({ page }),
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
      title="인기 영화"
      movies={data?.data.results}
      isLoading={isLoading}
      isFetching={isFetching}
      currentPage={page}
      totalPages={data?.data.total_pages}
      onPageChange={handlePageChange}
    />
  );
};

export default Popular;