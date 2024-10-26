import React, { useState, useEffect } from 'react';
import { fetchPopular } from "../../../api/movieApi.js";
import MovieCard from '../../../components/MovieCard';
import { Container, Title, Grid } from '../../../styles/commonStyles';

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchPopular();
        console.log('API 응답:', response.data);
        setMovies(response.data.results);
        setLoading(false);
      } catch (err) {
        console.error('API 에러:', err);
        setError('인기 영화 데이터를 불러오는데 실패했습니다.');
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) return <Container>로딩 중...</Container>;
  if (error) return <Container>{error}</Container>;

  return (
    <Container>
      <Title>인기 영화</Title>
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

export default Popular;