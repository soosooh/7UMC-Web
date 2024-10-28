import React from 'react';
import styled from 'styled-components';

const SignUpPage = () => {
  return (
    <Container>
      <Title>회원가입 페이지</Title>
      
    </Container>
  );
};

// 스타일링
const Container = styled.div`
  background-color: black;
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const Title = styled.h1`
  font-size: 35px;
  margin-bottom: 770px;
  font-family: 'Inter', sans-serif; /* Inter 폰트 적용 */
  margin-right:1455px;
`;

const Description = styled.p`
  font-size: 18px;
  max-width: 600px;
`;

export default SignUpPage;
