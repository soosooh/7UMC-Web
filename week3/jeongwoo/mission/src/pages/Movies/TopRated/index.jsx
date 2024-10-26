import React, { useState, useEffect } from 'react';
import { fetchTopRated } from "../../../api/movieApi.js";
import MovieCard from '../../../components/MovieCard';
import { Container, Title, Grid } from '../../../styles/commonStyles';

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchTopRated();
        console.log('API 응답:', response.data);
        setMovies(response.data.results);
        setLoading(false);
      } catch (err) {
        console.error('API 에러:', err);
        setError('높은 평점 영화 데이터를 불러오는데 실패했습니다.');
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) return <Container>로딩 중...</Container>;
  if (error) return <Container>{error}</Container>;

  return (
    <Container>
      <Title>높은 평점 영화</Title>
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

export default TopRated;