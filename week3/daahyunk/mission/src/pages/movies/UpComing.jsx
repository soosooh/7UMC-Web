import { useEffect, useState } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import { fetchUpcomingMovies } from '../../api/tmdb';
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
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        const moviesData = await fetchUpcomingMovies();
        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        setError('영화 데이터를 불러오는 데 실패했습니다.');
        setLoading(false);
      }
    };

    getUpcomingMovies();
  }, []);

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
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
    </UpcomingContainer>
  );
};

export default Upcoming;
