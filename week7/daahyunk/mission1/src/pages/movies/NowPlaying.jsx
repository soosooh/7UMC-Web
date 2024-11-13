import MovieCard from '../../components/movies/MovieCard';
import SkeletonCard from '../../components/movies/SkeletonCard'; // SkeletonCard import 추가
import { useQuery } from '@tanstack/react-query';
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

const fetchNowPlayingMovies = async () => {
  const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=ko-KR', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }

  return response.json();
};

const NowPlaying = () => {
  const { data: movies, isLoading, error } = useQuery({
    queryKey: ['nowPlayingMovies'],
    queryFn: fetchNowPlayingMovies
  });

  if (isLoading) {
    return (
      <NowPlayingContainer>
        <MoviesContainer>
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </MoviesContainer>
      </NowPlayingContainer>
    );
  }

  if (error) {
    return <NowPlayingContainer>{error.message}</NowPlayingContainer>;
  }

  if (!movies || movies.results.length === 0) {
    return <NowPlayingContainer>영화 데이터가 없습니다.</NowPlayingContainer>;
  }

  return (
    <NowPlayingContainer>
      <MoviesContainer>
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
    </NowPlayingContainer>
  );
};

export default NowPlaying;
