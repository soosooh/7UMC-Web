import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
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
  if (movieError || creditsError) return <div>에러가 발생했습니다.</div>;

 
  const directorInfo = castAndCrew.crew.find((member) => member.job === 'Director');
  
  const mainCast = castAndCrew.cast ? castAndCrew.cast.slice(0, 10) : [];

  return (
    <MovieDetailContent
      movie={movie}
      directorInfo={directorInfo}
      mainCast={mainCast}
    />
  );
};

export default MovieDetails;
