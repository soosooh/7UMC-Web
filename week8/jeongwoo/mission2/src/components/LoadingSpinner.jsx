import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const LoadingText = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #495057;
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const bounce = keyframes`
  0%, 80%, 100% { 
    transform: translateY(0);
  }
  40% { 
    transform: translateY(-10px);
  }
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #e9ecef;
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out;
  animation-delay: ${props => props.delay}s;
`;

const LoadingSpinner = ({ text = '계시물을 불러오는 중입니다.' }) => {
  return (
    <LoadingContainer>
      <LoadingText>{text}</LoadingText>
      <DotsContainer>
        {[...Array(5)].map((_, index) => (
          <Dot key={index} delay={index * 0.12} />
        ))}
      </DotsContainer>
    </LoadingContainer>
  );
};

export default LoadingSpinner;