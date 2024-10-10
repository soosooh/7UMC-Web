import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 175px; 
  height: 335px; 
  border-radius: 8px; 
  overflow: hidden;

  &:hover .desc {
    opacity: 1;
  }
`;

const Poster = styled.img`
  width: 100%;
  height: 255px; 
  border-radius: 8px 8px 0 0; 
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 0;
  gap: 0.25rem;
  height: 80px; 
  color: #fff;
  box-sizing: border-box;
  border-radius: 0 0 8px 8px; 
`;

const Title = styled.p`
  font-size: 15px; 
  font-weight: bold;
  margin: 0;
`;

const ReleaseDate = styled.p`
  font-size: 10px; 
  margin: 0;
`;

const DescriptionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75); 
  color: white;
  padding: 10px;
  font-size: 0.7rem; 
  border-radius: 8px; 
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
