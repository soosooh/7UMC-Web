import React from 'react';
import { fetchTopRated } from "../../../api/movieApi.js";
import MovieCard from '../../../components/MovieCard';
import { Container, Title, Grid } from '../../../styles/commonStyles';
import useMovies from '../../../hooks/useMovies.jsx';

const TopRated = () => {
  const { data: movies, component } = useMovies(fetchTopRated);

  if (component) return component;

  return (
    <Container>
      <Title>높은 평점 영화</Title>
      <Grid>
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default TopRated;