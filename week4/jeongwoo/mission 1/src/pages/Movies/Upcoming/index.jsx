import React from 'react';
import { fetchUpcoming } from "../../../api/movieApi.js";
import MovieCard from '../../../components/MovieCard';
import { Container, Title, Grid } from '../../../styles/commonStyles';
import useMovies from '../../../hooks/useMovies.jsx';

const Upcoming = () => {
  // useState와 useEffect를 사용한 상태 관리 대신 custom hook 사용
  // movies, loading, error 상태를 한 번에 관리
  const { movies, component } = useMovies(fetchUpcoming);

  // loading이나 error 상태일 경우 해당 컴포넌트 반환
  if (component) return component;

  return (
    <Container>
      <Title>개봉 예정 영화</Title>
      <Grid>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Upcoming;