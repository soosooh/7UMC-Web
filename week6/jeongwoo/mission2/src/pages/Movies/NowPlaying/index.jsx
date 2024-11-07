import React from 'react';
import { fetchNowPlaying } from "../../../api/movieApi.js";
import MovieCard from '../../../components/MovieCard';
import { Container, Title, Grid } from '../../../styles/commonStyles';
import useMovies from '../../../hooks/useMovies.jsx';

const NowPlaying = () => {
  const { data: movies, component } = useMovies(fetchNowPlaying);
  
  console.log('Now Playing Movies:', movies); // 데이터 확인

  if (component) return component;

  return (
    <Container>
      <Title>현재 상영 중</Title>
      <Grid>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))
        ) : (
          <div>표시할 영화가 없습니다.</div>
        )}
      </Grid>
    </Container>
  );
};

export default NowPlaying;