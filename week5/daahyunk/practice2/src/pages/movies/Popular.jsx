import MovieCard from '../../components/movies/MovieCard';
import useFetch from '../../hooks/useFetch'; 
import styled from 'styled-components';

const PopularContainer = styled.div`
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

const Popular = () => {
  const { data: movies, loading, error } = useFetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR');

  if (loading) {
    return <PopularContainer>로딩 중입니다...</PopularContainer>;
  }

  if (error) {
    return <PopularContainer>{error}</PopularContainer>;
  }

  if (!movies || movies.length === 0) {
    return <PopularContainer>영화 데이터가 없습니다.</PopularContainer>;
  }

  return (
    <PopularContainer>
      <MoviesContainer>
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
    </PopularContainer>
  );
};

export default Popular;
