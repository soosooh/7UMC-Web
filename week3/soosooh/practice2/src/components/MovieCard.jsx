import styled from "styled-components";
import React, { useState } from "react";

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
  background-color: #383b67;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
`;

const Title = styled.div`
  color: white;
  font-size: 13px;
  display: flex;
  justify-content: center;
  margin: 5px 0px 5px 10px;
`;
// #383B67
const ImgContainer = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 10px 10px 0 0;
  object-fit: cover; /* 이미지 비율을 유지하며 잘라내기 */
`;
const Average = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 13px;
  margin: 5px 10px 5px 0px;
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

const MovieCard = ({ poster_path, original_title, vote_average, overview }) => {
  const [isHovered, setIsHovered] = useState(false); // hover 상태 관리

  return (
    <CardContainer
      isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)} // 마우스 오버 시 상태 변경
      onMouseLeave={() => setIsHovered(false)} // 마우스 아웃 시 상태 변경
    >
      <ImgContainer
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <TitleContainer>
        <Title>{original_title}</Title>
        <Average>{vote_average}</Average>
      </TitleContainer>
      <Overview isHovered={isHovered}>{overview}</Overview>
    </CardContainer>
  );
};

export default MovieCard;
