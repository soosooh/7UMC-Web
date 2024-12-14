import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUpcoming } from '../../../api/movieApi';
import MovieList from '../../../components/MovieList';

const Upcoming = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData
  } = useQuery({
    queryKey: ['movies', 'upcoming', page],
    queryFn: () => fetchUpcoming({ page }),
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
      title="개봉 예정 영화"
      movies={data?.data.results}
      isLoading={isLoading}
      isFetching={isFetching}
      currentPage={page}
      totalPages={data?.data.total_pages}
      onPageChange={handlePageChange}
    />
  );
};

export default Upcoming;