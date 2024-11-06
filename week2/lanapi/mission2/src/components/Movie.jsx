import React from "react";
import styled from "styled-components";

const Description = styled.p`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 10px;
  background-color: #000; 
`;

const Movie = ({ data }) => {
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const shuffledData = shuffleArray(data);

  return (
    <>
      {shuffledData.map((item, index) => (
        <Description key={index}>{item}</Description>
      ))}
    </>
  );
};

export default Movie;