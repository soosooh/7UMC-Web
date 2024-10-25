import { useEffect, useState } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import { fetchTopRatedMovies } from '../../api/tmdb';
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
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const moviesData = await fetchTopRatedMovies();
        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        setError('영화 데이터를 불러오는 데 실패했습니다.');
        setLoading(false);
      }
    };

    getTopRatedMovies();
  }, []);

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
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
    </TopRatedContainer>
  );
};

export default TopRated;
