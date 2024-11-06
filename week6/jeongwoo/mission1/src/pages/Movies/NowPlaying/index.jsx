import React from 'react';
import { fetchNowPlaying } from "../../../api/movieApi.js";
import MovieCard from '../../../components/MovieCard';
import { Container, Title, Grid } from '../../../styles/commonStyles';
import useMovies from '../../../hooks/useMovies.jsx';

const NowPlaying = () => {
  const { data: movies, component } = useMovies(fetchNowPlaying);

  if (component) return component;

  return (
    <Container>
      <Title>현재 상영 중</Title>
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

export default NowPlaying;