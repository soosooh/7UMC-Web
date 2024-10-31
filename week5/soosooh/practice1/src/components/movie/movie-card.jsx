import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  width: 195px;
  height: 329px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 10px;
  flex-direction: column;
  position: relative;
  min-width: 195px;
  transition: background-color 0.3s;
  background-color: ${({ isHovered }) =>
    isHovered
      ? "rgba(0, 0, 0, 0.7)"
      : "transparent"}; /* 마우스 오버 시 배경색 변경 */
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
`;

const Title = styled.div`
  color: white;
  font-size: 13px;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;
// #383B67
const ImgContainer = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 10px 10px 0 0;
  object-fit: cover; /* 이미지 비율을 유지하며 잘라내기 */
`;
const Date = styled.div`
  display: flex;
  justify-content: flex-start;
  color: white;
  font-size: 13px;
`;

const Overview = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  font-size: 12px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const MovieCard = ({ id, poster_path, title, release_date }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <CardContainer onClick={handleClick}>
      <ImgContainer
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <TitleContainer>
        <Title>{title}</Title>
        <Date>{release_date}</Date>
      </TitleContainer>
    </CardContainer>
  );
};

export default MovieCard;
