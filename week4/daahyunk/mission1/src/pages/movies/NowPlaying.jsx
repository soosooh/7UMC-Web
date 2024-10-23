import MovieCard from '../../components/movies/MovieCard';
import useFetch from '../../hooks/useFetch'; 
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
  const { data: movies, loading, error } = useFetch('https://api.themoviedb.org/3/movie/now_playing?language=ko-KR');

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
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
    </NowPlayingContainer>
  );
};

export default NowPlaying;
