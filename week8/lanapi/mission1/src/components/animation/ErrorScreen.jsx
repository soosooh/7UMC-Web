import React from "react";
import styled, { keyframes } from "styled-components";

const ErrorScreen = () => {
  return (
    <StyledErrorScreen>
      <ErrorCircle>
        <CrossLine rotated />
        <CrossLine />
      </ErrorCircle>
      <ErrorMessage>에러가 발생했습니다</ErrorMessage>
    </StyledErrorScreen>
  );
};

export default ErrorScreen;

// 스타일 정의
const StyledErrorScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
`;

const ErrorCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ff0000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeOut} 3s ease-in-out forwards;
`;

const drawLine = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 60%;
  }
`;

const CrossLine = styled.div`
  position: absolute;
  width: 0;
  height: 6px;
  background-color: #fff;
  border-radius: 3px;
  animation: ${drawLine} 3s ease forwards;

  ${(props) =>
    props.rotated &&
    `
    transform: rotate(45deg);
  `}

  ${(props) =>
    !props.rotated &&
    `
    transform: rotate(-45deg);
  `}
`;

const ErrorMessage = styled.p`
  margin-top: 16px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  opacity: 0;
  animation: ${fadeOut} 1.5s ease-in-out forwards;
  animation-delay: 0.5s;
`;
