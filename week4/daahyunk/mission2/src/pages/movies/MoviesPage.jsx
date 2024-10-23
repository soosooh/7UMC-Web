import styled from 'styled-components';
import MovieCard from '../../components/movies/MovieCard';
import { MOVIES } from '../mocks/movies';

const MovieListContainer = styled.div`
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

const MoviesPage = () => {
  return (
    <MovieListContainer>
      <MoviesContainer>
        {MOVIES.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
    </MovieListContainer>
  );
};

export default MoviesPage;
