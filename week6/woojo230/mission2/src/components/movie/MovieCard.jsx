import React, { useState } from "react";
import styled from "styled-components";
import MovieDescription from "./MovieDescription";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  box-sizing: border-box;
  width: 150px; /* 카드의 너비 */
  height: 250px; /*카드의 높이*/
  position: relative; /* 자식 요소를 위한 기준점 설정 */
`;

const ImgContainer = styled.img`
  width: 100%; /* 포스터가 카드 너비에 맞게 */
  height: 80%; /* 비율 유지 */
  border-radius: 6px;
`;

const TextContainer = styled.div``;

const Title = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: white;
  margin: 0px;
`;

const MovieDate = styled.p`
  font-size: 10px;
  color: white;
  margin: 0px;
`;

const MovieCard = ({ id, title, poster_path, overview, release_date }) => {
  const [HoverState, setHoverState] = useState(false);
  const ImgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <CardContainer onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)} onClick={handleClick}>
      <ImgContainer src={ImgUrl} alt={title} />
      <TextContainer>
        <Title>{title}</Title>
        <MovieDate>{release_date}</MovieDate>
      </TextContainer>
      {/*  */}
      {HoverState && <MovieDescription overview={overview} />}
    </CardContainer>
  );
};

export default MovieCard;
