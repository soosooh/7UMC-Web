import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingScreen = () => {
  return (
    <StyledLoadingScreen>
      <LoadingContainer>
        {Array.from({ length: 5 }).map((_, index) => (
          <LoadingBall key={index} delay={index * 0.2} />
        ))}
      </LoadingContainer>
      <LoadingMessage>로딩 중...</LoadingMessage>
    </StyledLoadingScreen>
  );
};

export default LoadingScreen;

// 스타일 정의
const StyledLoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px); /* 공이 올라가는 높이 */
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const LoadingBall = styled.div`
  width: 15px;
  height: 15px;
  background-color: #007bff;
  border-radius: 50%;
  animation: ${bounce} 1s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const LoadingMessage = styled.p`
  margin-top: 16px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;
