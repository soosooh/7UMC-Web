import MovieCard from '../../components/movies/MovieCard';
import useFetch from '../../hooks/useFetch'; 
import styled from 'styled-components';

const UpcomingContainer = styled.div`
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

const Upcoming = () => {
  const { data: movies, loading, error } = useFetch('https://api.themoviedb.org/3/movie/upcoming?language=ko-KR');

  if (loading) {
    return <UpcomingContainer>로딩 중입니다...</UpcomingContainer>;
  }

  if (error) {
    return <UpcomingContainer>{error}</UpcomingContainer>;
  }

  if (!movies || movies.length === 0) {
    return <UpcomingContainer>영화 데이터가 없습니다.</UpcomingContainer>;
  }

  return (
    <UpcomingContainer>
      <MoviesContainer>
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
    </UpcomingContainer>
  );
};

export default Upcoming;
