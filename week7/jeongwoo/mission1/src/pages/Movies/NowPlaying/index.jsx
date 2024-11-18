import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNowPlaying } from "../../../api/movieApi";
import MovieList from '../../../components/MovieList';

const NowPlaying = () => {
  const { data: movies, isLoading, isError, error } = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: fetchNowPlaying,
    select: (response) => response.data.results
  });
  
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return <MovieList title="현재 상영 중" movies={movies} />;
};

export default NowPlaying;