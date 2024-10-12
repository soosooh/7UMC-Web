import React, { useState, useEffect } from 'react';
import { fetchNowPlaying } from '../../../utils/api';
import MovieCard from '../../../components/MovieCard';
import styled from 'styled-components';

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchNowPlaying();
        console.log('API 응답:', response.data); // 응답 데이터 로깅
        setMovies(response.data.results);
        setLoading(false);
      } catch (err) {
        console.error('API 에러:', err); // 에러 로깅
        setError('현재 상영 중인 영화 데이터를 불러오는데 실패했습니다.');
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>현재 상영 중</h1>
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
          />
        ))}
      </MovieGrid>
    </div>
  );
};

export default NowPlaying;