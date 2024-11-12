import React from 'react';
import { fetchPopular } from "../../../api/movieApi.js";
import MovieList from '../../../components/MovieList';
import useMovies from '../../../hooks/useMovies.jsx';

const Popular = () => {
  const { data: movies, component } = useMovies(fetchPopular);
  
  if (component) return component;

  return <MovieList title="인기 영화" movies={movies} />;
};

export default Popular;
