import React from 'react';
import { fetchTopRated } from "../../../api/movieApi.js";
import MovieList from '../../../components/MovieList';
import useMovies from '../../../hooks/useMovies.jsx';

const TopRated = () => {
  const { data: movies, component } = useMovies(fetchTopRated);
  
  if (component) return component;

  return <MovieList title="높은 평점 영화" movies={movies} />;
};

export default TopRated;