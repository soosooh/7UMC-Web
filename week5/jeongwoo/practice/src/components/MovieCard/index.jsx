import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CardWrapper = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  border-radius: 4px;
  overflow: hidden;
  background-color: #1a1a1a;
  margin-bottom: 8px;
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h3`
  margin: 0;
  padding: 8px 0 4px 0;
  font-size: 14px;
  color: white;
  font-weight: normal;
`;

const ReleaseDate = styled.p`
  margin: 0;
  font-size: 12px;
  color: #999;
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
            console.error('이미지 로드 실패:', e);
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