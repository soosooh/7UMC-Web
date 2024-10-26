import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #aaa;
  font-size: 16px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to YONGCHA</Title>
      <Subtitle>Discover your next favorite movie!</Subtitle>
    </HomeContainer>
  );
};

export default Home;