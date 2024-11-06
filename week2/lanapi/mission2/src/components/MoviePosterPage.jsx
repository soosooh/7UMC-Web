

import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 150px;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const PosterImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Title = styled.h3`
  font-size: 1em;
  color: #333;
  margin: 10px 0 5px;
`;

const Overview = styled.p`
  font-size: 0.8em;
  color: #666;
`;

const MovieCardComponent = ({ movie }) => {
  return (
    <Card>
      <PosterImage src={movie.posterUrl} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Overview>{movie.overview}</Overview>
    </Card>
  );
};

export default MovieCardComponent;
