import MovieCard from '../../components/movies/MovieCard';
import useFetch from '../../hooks/useFetch'; 
import styled from 'styled-components';

const TopRatedContainer = styled.div`
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

const TopRated = () => {
  const { data: movies, loading, error } = useFetch('https://api.themoviedb.org/3/movie/top_rated?language=ko-KR');

  if (loading) {
    return <TopRatedContainer>로딩 중입니다...</TopRatedContainer>;
  }

  if (error) {
    return <TopRatedContainer>{error}</TopRatedContainer>;
  }

  if (!movies || movies.length === 0) {
    return <TopRatedContainer>영화 데이터가 없습니다.</TopRatedContainer>;
  }

  return (
    <TopRatedContainer>
      <MoviesContainer>
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
    </TopRatedContainer>
  );
};

export default TopRated;
