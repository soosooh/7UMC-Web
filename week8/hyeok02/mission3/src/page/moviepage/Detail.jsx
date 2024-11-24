import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import MovieDetailContent from '../../components/DetailContent';
import ItemSkeleton from '../../components/Item'; 

const fetchMovieDetails = async (movieId) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  });
  if (!response.ok) {
    throw new Error('영화 상세 정보를 가져오는 데 실패했습니다.');
  }
  return response.json();
};

const fetchCredits = async (movieId) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  });
  if (!response.ok) {
    throw new Error('영화 크레딧 정보를 가져오는 데 실패했습니다.');
  }
  return response.json();
};

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 900px) {
    padding: 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }

  @media (max-width: 300px) {
    padding: 0.5rem;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 300px) {
    font-size: 0.9rem;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();

  const { data: movie, isLoading: isMovieLoading, error: movieError } = useQuery(
    ['movieDetails', movieId],
    () => fetchMovieDetails(movieId)
  );
  const { data: castAndCrew, isLoading: isCreditsLoading, error: creditsError } = useQuery(
    ['movieCredits', movieId],
    () => fetchCredits(movieId)
  );

  if (isMovieLoading || isCreditsLoading) return <ItemSkeleton />;
  if (movieError || creditsError) return <ErrorMessage>에러가 발생했습니다.</ErrorMessage>;

  const directorInfo = castAndCrew.crew.find((member) => member.job === 'Director');
  const mainCast = castAndCrew.cast ? castAndCrew.cast.slice(0, 10) : [];

  return (
    <Container>
      <MovieDetailContent
        movie={movie}
        directorInfo={directorInfo}
        mainCast={mainCast}
      />
    </Container>
  );
};

export default MovieDetails;
