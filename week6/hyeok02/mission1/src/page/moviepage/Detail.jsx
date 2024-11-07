// MovieDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../Hook/Hook';
import MovieDetailContent from '../../components/DetailContent';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data: movie, loading, error } = useFetchData(`/movie/${movieId}?language=ko-KR`);
  const { data: castAndCrew } = useFetchData(`/movie/${movieId}/credits?language=ko-KR`);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  const directorInfo = castAndCrew?.crew?.find((crewMember) => crewMember.job === 'Director');
  const mainCast = castAndCrew?.cast?.slice(0, 20) || [];

  return <MovieDetailContent movie={movie} directorInfo={directorInfo} mainCast={mainCast} />;
};

export default MovieDetails;
