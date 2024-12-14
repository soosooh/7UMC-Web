import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CardWrapper = styled.div`
 width: 100%;
 margin-bottom: 10px;
 cursor: pointer;
 transition: transform 0.2s ease-in-out;

 &:hover {
   transform: scale(1.05);
 }

 @media (max-width: 768px) {
   &:hover {
     transform: none;
   }
 }

 @media (min-width: 768px) {
   margin-bottom: 20px;
 }
`;

const Card = styled.div`
 position: relative;
 width: 100%;
 aspect-ratio: 2/3;
 border-radius: 6px;
 overflow: hidden;
 background-color: #1a1a1a;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

 @media (min-width: 768px) {
   border-radius: 8px;
 }
`;

const PosterImage = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
`;

const Title = styled.h3`
 margin: 4px 0;
 padding: 0 4px;
 color: white;
 font-size: 12px;
 line-height: 1.3;
 height: 2.6em;
 overflow: hidden;
 display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
 font-weight: normal;
 
 @media (min-width: 768px) {
   font-size: 14px;
   margin: 8px 0;
 }
`;

const ReleaseDate = styled.p`
 font-size: 10px;
 color: #999;
 margin: 0;
 padding: 0 4px;
 
 @media (min-width: 768px) {
   font-size: 12px;
 }
`;

const MovieCard = ({ movie }) => {
 const navigate = useNavigate();

 if (!movie) return null;

 const { id, title, poster_path: posterPath, release_date: releaseDate } = movie;

 const imageUrl = posterPath 
   ? `https://image.tmdb.org/t/p/w500${posterPath}`
   : 'https://via.placeholder.com/500x750?text=No+Image';

 const handleClick = () => {
   navigate(`/movies/${id}`);
 };

 return (
   <CardWrapper onClick={handleClick}>
     <Card>
       <PosterImage 
         src={imageUrl} 
         alt={title} 
         onError={(e) => {
           e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
         }} 
       />
     </Card>
     <Title>{title}</Title>
     <ReleaseDate>{releaseDate}</ReleaseDate>
   </CardWrapper>
 );
};

export default MovieCard;