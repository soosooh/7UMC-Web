import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUpcoming } from "../../../api/movieApi";
import MovieList from '../../../components/MovieList';

const Upcoming = () => {
  const { data: movies, isLoading, isError, error } = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: fetchUpcoming,
    select: (response) => response.data.results
  });
  
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return <MovieList title="개봉 예정 영화" movies={movies} />;
};

export default Upcoming;