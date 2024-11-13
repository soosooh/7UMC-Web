// components/MovieList/index.jsx
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container, Title, Grid } from '../../styles/commonStyles';
import MovieItem from './MovieItem';
import { MovieListSkeleton } from '../common/LoadingSkeleton';
import Pagination from '../common/Pagination';

const MovieContainer = styled(Container)`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
`;

const MovieGrid = styled(Grid)`
  flex: 1;
`;

const ErrorMessage = styled.div`
  color: white;
  text-align: center;
  padding: 20px;
  background-color: rgba(220, 53, 69, 0.1);
  border-radius: 4px;
  margin: 20px 0;
`;

const NoMovies = styled.div`
  color: white;
  text-align: center;
  padding: 40px;
`;

const MovieList = ({ 
  title, 
  movies, 
  isLoading,
  isFetching,
  currentPage,
  totalPages,
  onPageChange 
}) => {
  // 페이지 변경 시 상단으로 스크롤
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  if (isLoading) return <MovieListSkeleton />;

  return (
    <MovieContainer>
      <Title>{title}</Title>
      <MovieGrid>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        ) : (
          <NoMovies>표시할 영화가 없습니다.</NoMovies>
        )}
      </MovieGrid>
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        isFetching={isFetching}
      />
    </MovieContainer>
  );
};

export default MovieList;