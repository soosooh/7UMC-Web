import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Poster from '../../components/movies/Poster'; 
import Credits from '../../components/movies/Credits';

const MovieDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const fetchMovieDetails = async (movieId) => {
  const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movie details: ${response.status}`);
  }

  return response.json();
};

const fetchCredits = async (movieId) => {
  const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch credits: ${response.status}`);
  }

  return response.json();
};

const MovieDetailPage = () => {
  const { movieId } = useParams();

  const { data: movie, isLoading: movieLoading, error: movieError } = useQuery({
    queryKey: ['movieDetails', movieId],
    queryFn: () => fetchMovieDetails(movieId),
  });

  const { data: credits, isLoading: creditsLoading, error: creditsError } = useQuery({
    queryKey: ['movieCredits', movieId],
    queryFn: () => fetchCredits(movieId),
  });

  if (movieLoading || creditsLoading) {
    return <MovieDetailContainer>로딩 중입니다...</MovieDetailContainer>;
  }

  if (movieError || creditsError) {
    return <MovieDetailContainer>데이터를 불러오는 데 실패했습니다.</MovieDetailContainer>;
  }

  if (!movie || !credits) {
    return <MovieDetailContainer>영화 데이터가 없습니다.</MovieDetailContainer>;
  }

  return (
    <MovieDetailContainer>
      <Poster movie={movie} /> 
      <Credits credits={credits} /> 
    </MovieDetailContainer>
  );
};

export default MovieDetailPage;
