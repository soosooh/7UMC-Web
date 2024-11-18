import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTopRated } from "../../../api/movieApi";
import MovieList from '../../../components/MovieList';

const TopRated = () => {
  const { data: movies, isLoading, isError, error } = useQuery({
    queryKey: ['movies', 'top-rated'],
    queryFn: fetchTopRated,
    select: (response) => response.data.results
  });
  
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return <MovieList title="높은 평점 영화" movies={movies} />;
};

export default TopRated;