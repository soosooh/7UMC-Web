import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTopRated } from '../../../api/movieApi';
import MovieList from '../../../components/MovieList';

const TopRated = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData
  } = useQuery({
    queryKey: ['movies', 'top-rated', page],
    queryFn: () => fetchTopRated({ page }),
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
      title="높은 평점 영화"
      movies={data?.data.results}
      isLoading={isLoading}
      isFetching={isFetching}
      currentPage={page}
      totalPages={data?.data.total_pages}
      onPageChange={handlePageChange}
    />
  );
};

export default TopRated;