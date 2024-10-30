import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  width: 171px;
  height: 329px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  &:hover .desc {
    opacity: 1;
  }
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
  padding: 0.5rem 0;
  gap: 0.25rem;
  height: 77.4px;
`;

const Item = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${movie.id}`); // /movies/:movieId 경로로 이동
  };

  return (
    <Container onClick={handleClick}>
      <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <InfoBox>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </InfoBox>
    </Container>
  );
};

export default Item;
