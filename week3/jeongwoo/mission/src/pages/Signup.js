import React from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Signup = () => {
  return (
    <SignupContainer>
      <Title>회원가입 페이지</Title>
      {/* 여기에 회원가입 폼을 추가할 수 있습니다 */}
    </SignupContainer>
  );
};

export default Signup;