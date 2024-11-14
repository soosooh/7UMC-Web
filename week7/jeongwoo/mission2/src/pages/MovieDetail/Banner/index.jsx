import React from 'react';
import styled from 'styled-components';

const MovieHeader = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin-bottom: 40px;
  border-radius: 10px;
  overflow: hidden;
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
  bottom: 40px;
  left: 40px;
  right: 40px;
  color: white;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const MetaItem = styled.p`
  margin: 0;
`;

const Overview = styled.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 800px;
  margin-top: 20px;
`;

export const BannerSkeleton = styled(MovieHeader)`
  background: linear-gradient(
    90deg,
    rgba(26, 26, 26, 0.8) 25%,
    rgba(42, 42, 42, 0.8) 50%,
    rgba(26, 26, 26, 0.8) 75%
  );
  animation: pulse 1.5s ease-in-out infinite;
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