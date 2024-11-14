import React from 'react';
import { fetchUpcoming } from "../../../api/movieApi.js";
import MovieList from '../../../components/MovieList';
import useMovies from '../../../hooks/useMovies.jsx';

const Upcoming = () => {
  const { data: movies, component } = useMovies(fetchUpcoming);
  
  if (component) return component;

  return <MovieList title="개봉 예정 영화" movies={movies} />;
};

export default Upcoming;