import { useQuery } from '@tanstack/react-query';
import * as movieApi from '../api/movieApi';

export const useMovieList = (type) => {
  const queryFunctions = {
    'now-playing': movieApi.fetchNowPlaying,
    'popular': movieApi.fetchPopular,
    'top-rated': movieApi.fetchTopRated,
    'upcoming': movieApi.fetchUpcoming,
  };

  return useQuery({
    queryKey: ['movies', type],
    queryFn: queryFunctions[type],
    select: (response) => response.data.results,
    staleTime: 1000 * 60 * 5, // 5분
  });
};

export const useMovieDetail = (movieId) => {
  return useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => movieApi.fetchMovieDetail(movieId),
    select: (response) => response.data,
    enabled: !!movieId,
    staleTime: 1000 * 60 * 5, // 5분
  });
};