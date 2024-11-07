import React from 'react';
import { fetchPopular } from "../../../api/movieApi.js";
import MovieCard from '../../../components/MovieCard';
import { Container, Title, Grid } from '../../../styles/commonStyles';
import useMovies from '../../../hooks/useMovies.jsx';

const Popular = () => {
  const { data: movies, component } = useMovies(fetchPopular);  // data를 movies로 이름 변경

  if (component) return component;

  return (
    <Container>
      <Title>인기 영화</Title>
      <Grid>
        {movies?.map((movie) => (  // 옵셔널 체이닝 추가
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Popular;