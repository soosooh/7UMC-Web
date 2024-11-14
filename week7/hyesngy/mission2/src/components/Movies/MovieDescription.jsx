import React from 'react';
import styled from 'styled-components';

const MovieDescriptionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 0.75rem;
  opacity: 1;
`;

const MovieDescription = ({ overview }) => {
  return (
    <MovieDescriptionContainer>
      <p>{overview}</p>
    </MovieDescriptionContainer>
  );
};

export default MovieDescription;
