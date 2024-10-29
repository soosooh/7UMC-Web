import React from 'react';
import { fetchUpcoming } from "../../../api/movieApi.js";
import MovieCard from '../../../components/MovieCard';
import { Container, Title, Grid } from '../../../styles/commonStyles';
import useMovies from '../../../hooks/useMovies.jsx';

const Upcoming = () => {
  const { data: movies, component } = useMovies(fetchUpcoming);

  if (component) return component;

  return (
    <Container>
      <Title>개봉 예정 영화</Title>
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

export default Upcoming;