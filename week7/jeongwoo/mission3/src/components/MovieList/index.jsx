import React from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';
import { MovieListSkeleton } from '../common/LoadingSkeleton';
import Pagination from '../common/Pagination';

const MovieContainer = styled.div`
 padding: 10px;
 min-height: calc(100vh - 56px);
 display: flex;
 flex-direction: column;
 margin-top: -56px;
 padding-top: 56px;
 
 @media (min-width: 768px) {
   padding: 20px;
 }
`;

const Title = styled.h2`
 color: white;
 font-size: 18px;
 margin: 10px 0;
 padding: 0 5px;
 
 @media (min-width: 768px) {
   font-size: 24px;
   margin: 20px 0;
 }
`;

const MovieGrid = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 10px;
 padding: 10px 0;
 flex: 1;

 @media (min-width: 480px) {
   grid-template-columns: repeat(3, 1fr);
   gap: 15px;
 }

 @media (min-width: 768px) {
   grid-template-columns: repeat(4, 1fr);
   gap: 20px;
 }

 @media (min-width: 1024px) {
   grid-template-columns: repeat(5, 1fr);
 }
`;

const ErrorMessage = styled.div`
 color: white;
 text-align: center;
 padding: 20px;
 background-color: rgba(220, 53, 69, 0.1);
 border-radius: 4px;
 margin: 10px;
 font-size: 14px;

 @media (min-width: 768px) {
   margin: 20px;
   font-size: 16px;
 }
`;

const NoMovies = styled.div`
 color: white;
 text-align: center;
 padding: 20px;
 font-size: 14px;
 
 @media (min-width: 768px) {
   padding: 40px;
   font-size: 16px;
 }
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
     {totalPages > 1 && (
       <Pagination 
         currentPage={currentPage}
         totalPages={totalPages}
         onPageChange={onPageChange}
         isFetching={isFetching}
       />
     )}
   </MovieContainer>
 );
};

export default MovieList;