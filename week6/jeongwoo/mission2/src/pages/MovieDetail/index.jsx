import React, { useCallback } from 'react';  // useCallback 추가
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from '../../api/movieApi';
import useMovies from '../../hooks/useMovies';
import Banner from './Banner';
import CreditsList from './CreditsList';

const MovieDetail = () => {
  const { movieId } = useParams();
  
  // fetchMovieDetail 함수를 메모이제이션
  const fetchMovie = useCallback(() => fetchMovieDetail(movieId), [movieId]);
  
  // useMovies 훅에 메모이제이션된 함수 전달
  const { data: movieData, component } = useMovies(fetchMovie);

  if (component) return component;

  if (!movieData) {
    return <div>영화 정보를 불러오는 중...</div>;
  }

  return (
    <div>
      <Banner movieData={movieData} />
      {movieData.credits && <CreditsList credits={movieData.credits} />}
    </div>
  );
};

export default MovieDetail;