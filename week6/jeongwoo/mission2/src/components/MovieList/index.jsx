import React from 'react';
import { Container, Title, Grid } from '../../styles/commonStyles';
import MovieItem from './MovieItem';

const MovieList = ({ title, movies }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        ) : (
          <div>표시할 영화가 없습니다.</div>
        )}
      </Grid>
    </Container>
  );
};

export default MovieList;