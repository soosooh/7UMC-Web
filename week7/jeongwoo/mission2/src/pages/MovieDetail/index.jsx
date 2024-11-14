import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchMovieDetail } from '../../api/movieApi';
import Banner from './Banner';
import CreditsList from './CreditsList';
import ErrorBoundary from '../../components/ErrorBoundary';
import { BannerSkeleton, CreditsListSkeleton } from '../../components/common/LoadingSkeleton';

const MovieDetail = () => {
  const { movieId } = useParams();
  
  const { data: movieData, isLoading, isError, error } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => fetchMovieDetail(movieId),
    select: (response) => response.data,
  });

  if (isLoading) {
    return (
      <>
        <BannerSkeleton />
        <CreditsListSkeleton />
      </>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ErrorBoundary>
      <Banner movieData={movieData} />
      <CreditsList credits={movieData.credits} />
    </ErrorBoundary>
  );
};

export default MovieDetail;