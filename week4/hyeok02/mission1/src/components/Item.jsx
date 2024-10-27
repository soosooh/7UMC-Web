import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 171px;
  height: 329px;
  border-radius: 10px;
  overflow: hidden;

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
  height: 77.41px;
  border-radius: 0 0 10px 10px;
  color: #fff;
  box-sizing: border-box;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

const ReleaseDate = styled.p`
  font-size: 12px;
  margin: 0;
`;

const DescriptionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  font-size: 0.75rem;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Item = ({ movie }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Container
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Poster
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <InfoBox>
        <Title>{movie.title}</Title>
        <ReleaseDate>{movie.release_date}</ReleaseDate>
      </InfoBox>

      {hovered && (
        <DescriptionOverlay className="desc">
          <p>{movie.overview}</p>
        </DescriptionOverlay>
      )}
    </Container>
  );
};

export default Item;
