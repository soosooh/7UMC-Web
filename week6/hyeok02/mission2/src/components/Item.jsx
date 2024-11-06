import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const skeletonAnimation = keyframes`
  0% { background-color: #e0e0e0; }
  50% { background-color: #f0f0f0; }
  100% { background-color: #e0e0e0; }
`;

const SkeletonContainer = styled.div`
  width: 171px;
  height: 329px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SkeletonBox = styled.div`
  width: 100%;
  height: ${({ height }) => height};
  background-color: #e0e0e0;
  border-radius: 10px;
  animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
`;

const Container = styled.div`
  width: 171px;
  height: 329px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover .desc { opacity: 1; }
`;

const Poster = styled.img`
  width: 100%;
  height: 251.59px;
  border-radius: 10px 10px 0 0;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 0;
  gap: 3px;
  height: 77.4px;
  font-size: 0.9rem;
  text-align: center;
  overflow: hidden;
`;

const Title = styled.h3`
  margin: 0;
  font-size: inherit;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Item = ({ movie, isLoading }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/movies/${movie.id}`);

  if (isLoading) {
    return (
      <SkeletonContainer>
        <SkeletonBox height="251.59px" rounded="10px 10px 0 0" />
        <SkeletonBox height="40px" rounded="10px" />
        <SkeletonBox height="20px" rounded="0 0 10px 10px" />
      </SkeletonContainer>
    );
  }

  return (
    <Container onClick={handleClick}>
      <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <InfoBox>
        <Title>{movie.title}</Title>
        <p>{movie.release_date}</p>
      </InfoBox>
    </Container>
  );
};

export default Item;
