import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Login = () => {
  return (
    <LoginContainer>
      <Title>로그인 페이지</Title>
      {}
    </LoginContainer>
  );
};

export default Login;