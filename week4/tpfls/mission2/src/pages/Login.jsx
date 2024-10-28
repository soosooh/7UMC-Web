import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Container>
      <Title>로그인 페이지</Title>
      
    </Container>
  );
};

// 스타일링
const Container = styled.div`
  background-color: black;
  color: white;
  width: 100vw;
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 950px;
  font-family: 'Inter', sans-serif; /* Inter 폰트 적용 */
  margin-right:1500px;
`;

const Description = styled.p`
  font-size: 18px;
  max-width: 600px;
`;

export default LoginPage;
