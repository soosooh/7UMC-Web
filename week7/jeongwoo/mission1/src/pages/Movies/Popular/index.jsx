import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPopular } from "../../../api/movieApi";
import MovieList from '../../../components/MovieList';

const Popular = () => {
  const { data: movies, isLoading, isError, error } = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: fetchPopular,
    select: (response) => response.data.results
  });
  
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return <MovieList title="인기 영화" movies={movies} />;
};

export default Popular;