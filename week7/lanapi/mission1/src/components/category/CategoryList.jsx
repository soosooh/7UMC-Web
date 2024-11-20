import React from 'react';
import MovieCard from '../movies/MovieCard';
import CardContainer from '../movies/CardContainer';
import { useQuery } from '@tanstack/react-query';

const CategoryList = ({ fetchMovies }) => {
  const { data: moviesData, isLoading, isError } = useQuery(['movies'], fetchMovies);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading movies.</div>;

  return (
    <CardContainer>
      {moviesData.results.map((movie) => (
        <MovieCard 
          key={movie.id}
          movieId={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
          releaseDate={movie.release_date}
          overview={movie.overview}
        />
      ))}
    </CardContainer>
  );
};

export default CategoryList;
