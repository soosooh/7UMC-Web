import React from 'react';
import styled from 'styled-components';

const MovieHeader = styled.div`
 width: 100%;
 height: 200px;
 position: relative;
 border-radius: 8px;
 overflow: hidden;
 margin-top: -56px;
 padding-top: 56px;

 @media (min-width: 768px) {
   height: 300px;
   border-radius: 10px;
 }
`;

const MoviePoster = styled.div`
 width: 100%;
 height: 100%;
 position: relative;
 
 &::after {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8));
 }
`;

const PosterImage = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
`;

const MovieInfo = styled.div`
 position: absolute;
 bottom: 15px;
 left: 15px;
 right: 15px;
 color: white;
 z-index: 2;

 @media (min-width: 768px) {
   bottom: 40px;
   left: 40px;
   right: 40px;
 }
`;

const Title = styled.h1`
 font-size: 20px;
 margin-bottom: 10px;
 
 @media (min-width: 768px) {
   font-size: 32px;
   margin-bottom: 20px;
 }
`;

const MetaInfo = styled.div`
 display: flex;
 flex-direction: column;
 gap: 5px;
 margin-bottom: 10px;
 font-size: 12px;

 @media (min-width: 768px) {
   gap: 10px;
   margin-bottom: 20px;
   font-size: 16px;
 }
`;

const MetaItem = styled.p`
 margin: 0;
`;

const Overview = styled.p`
 font-size: 12px;
 line-height: 1.4;
 opacity: 0.9;
 margin-top: 10px;
 display: -webkit-box;
 -webkit-line-clamp: 3;
 -webkit-box-orient: vertical;
 overflow: hidden;

 @media (min-width: 768px) {
   font-size: 14px;
   line-height: 1.6;
   margin-top: 20px;
   max-width: 800px;
   -webkit-line-clamp: 4;
 }
`;

const Banner = ({ movieData }) => {
 return (
   <MovieHeader>
     <MoviePoster>
       <PosterImage 
         src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
         alt={movieData.title}
       />
     </MoviePoster>
     <MovieInfo>
       <Title>{movieData.title}</Title>
       <MetaInfo>
         <MetaItem>평점: {movieData.vote_average?.toFixed(1)}</MetaItem>
         <MetaItem>{movieData.release_date}</MetaItem>
         <MetaItem>러닝타임: {movieData.runtime}분</MetaItem>
       </MetaInfo>
       <Overview>{movieData.overview}</Overview>
     </MovieInfo>
   </MovieHeader>
 );
};

export default Banner;