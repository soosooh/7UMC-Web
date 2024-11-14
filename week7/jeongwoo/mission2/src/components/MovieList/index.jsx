import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Container, Title, Grid } from '../../styles/commonStyles';
import MovieItem from './MovieItem';
import { MovieListSkeleton } from '../common/LoadingSkeleton';
import LoadingSpinner from '../common/LoadingSpinner';

const MovieGrid = styled(Grid)`
  margin-bottom: 20px;
`;

const NoMovies = styled.div`
  color: white;
  text-align: center;
  padding: 20px;
`;

const MovieList = ({ 
  title, 
  movies = [], 
  isLoading,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage
}) => {
  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <MovieListSkeleton />;

  return (
    <Container>
      <Title>{title}</Title>
      <MovieGrid>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        ) : (
          <NoMovies>표시할 영화가 없습니다.</NoMovies>
        )}
      </MovieGrid>
      <div ref={observerRef}>
        {isFetchingNextPage && <LoadingSpinner />}
      </div>
    </Container>
  );
};

export default MovieList;