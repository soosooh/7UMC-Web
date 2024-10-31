import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from '../../api/movieApi';
import useMovies from '../../hooks/useMovies';
import Banner from './Banner';
import CreditsList from './CreditsList';

const MovieDetail = () => {
  const { movieId } = useParams();
  const { data: movieData, component } = useMovies(fetchMovieDetail, movieId);

  if (component) return component;

  return (
    <div>
      <Banner movieData={movieData} />
      <CreditsList credits={movieData.credits} />
    </div>
  );
};

export default MovieDetail;