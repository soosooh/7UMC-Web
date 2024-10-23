import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PosterImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
`;

const ReleaseDate = styled.p`
  margin: 0;
  color: #666;
  font-size: 14px;
`;

const MovieCard = ({ title, posterPath, releaseDate }) => {
  const imageUrl = posterPath 
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  console.log('포스터 URL:', imageUrl); // URL 로깅

  return (
    <Card>
      <PosterImage src={imageUrl} alt={title} onError={(e) => {
        console.error('이미지 로드 실패:', e);
        e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
      }} />
      <CardContent>
        <Title>{title}</Title>
        <ReleaseDate>개봉일: {releaseDate}</ReleaseDate>
      </CardContent>
    </Card>
  );
};

export default MovieCard;