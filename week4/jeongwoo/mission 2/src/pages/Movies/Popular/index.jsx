import React from 'react';
import { fetchPopular } from "../../../api/movieApi.js";
import MovieCard from '../../../components/MovieCard';
import { Container, Title, Grid } from '../../../styles/commonStyles';
import useMovies from '../../../hooks/useMovies.jsx';

const Popular = () => {
  // useState와 useEffect를 사용한 상태 관리 대신 custom hook 사용
  // movies, loading, error 상태를 한 번에 관리
const { movies, component } = useMovies(fetchPopular);

 // loading이나 error 상태일 경우 해당 컴포넌트 반환
if (component) return component;

return (
  <Container>
    <Title>인기 영화</Title>
    <Grid>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}  // 개별 props 대신 movie 객체 전체 전달
        />
      ))}
    </Grid>
  </Container>
);
};

export default Popular;