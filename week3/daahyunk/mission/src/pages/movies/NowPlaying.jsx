import { useEffect, useState } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import { fetchNowPlayingMovies } from '../../api/tmdb';
import styled from 'styled-components';

const NowPlayingContainer = styled.div`
  width: 100%; 
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  overflow-y: auto;
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const moviesData = await fetchNowPlayingMovies();
        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        setError('영화 데이터를 불러오는 데 실패했습니다.');
        setLoading(false);
      }
    };

    getNowPlayingMovies();
  }, []);

  if (loading) {
    return <NowPlayingContainer>로딩 중입니다...</NowPlayingContainer>;
  }

  if (error) {
    return <NowPlayingContainer>{error}</NowPlayingContainer>;
  }

  if (!movies || movies.length === 0) {
    return <NowPlayingContainer>영화 데이터가 없습니다.</NowPlayingContainer>;
  }

  return (
    <NowPlayingContainer>
      <MoviesContainer>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
    </NowPlayingContainer>
  );
};

export default NowPlaying;
