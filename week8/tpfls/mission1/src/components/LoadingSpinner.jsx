import React from 'react';
import styled, { keyframes } from 'styled-components';

// 로딩 애니메이션 정의
const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

// 스타일 컴포넌트 정의
const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #4a90e2;
  animation: ${bounce} 1.2s infinite;
  animation-delay: ${(props) => props.delay};
`;

const Message = styled.p`
  font-size: 14px;
  color: #666;
`;

// 로딩 컴포넌트
const LoadingSpinner = () => {
  return (
    <Container>
      <Dots>
        <Dot delay="0s" />
        <Dot delay="0.2s" />
        <Dot delay="0.4s" />
      </Dots>
      <Message>게시글을 불러오는 중입니다..</Message>
    </Container>
  );
};

export default LoadingSpinner;
