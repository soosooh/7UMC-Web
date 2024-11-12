import React from 'react';
import { fetchNowPlaying } from "../../../api/movieApi.js";
import MovieList from '../../../components/MovieList';
import useMovies from '../../../hooks/useMovies.jsx';

const NowPlaying = () => {
  const { data: movies, component } = useMovies(fetchNowPlaying);
  
  if (component) return component;

  return <MovieList title="현재 상영 중" movies={movies} />;
};

export default NowPlaying;