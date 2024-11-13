import React from "react";
import styled, { keyframes } from "styled-components";

const skeleton = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const SkeletonContainer = styled.div`
  box-sizing: border-box;
  width: 150px;
  height: 250px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;

const SkeletonMain = styled.div`
  width: 100%;
  height: 80%; /* MovieCard의 이미지 비율과 동일하게 */
  background-color: rgb(230, 230, 230);
  border-radius: 6px;
  animation: ${skeleton} 1.5s infinite ease-in-out;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TitleBox = styled.div`
  width: 80%;
  height: 13px;
  background-color: rgb(200, 200, 200);
  border-radius: 4px;
  animation: ${skeleton} 1.5s infinite ease-in-out;
`;

const DateBox = styled.div`
  width: 50%;
  height: 10px;
  background-color: rgb(200, 200, 200);
  border-radius: 4px;
  animation: ${skeleton} 1.5s infinite ease-in-out;
`;

const SkeletonCard = () => {
  return (
    <SkeletonContainer>
      <SkeletonMain />
      <TextWrapper>
        <TitleBox />
        <DateBox />
      </TextWrapper>
    </SkeletonContainer>
  );
};

export default SkeletonCard;
