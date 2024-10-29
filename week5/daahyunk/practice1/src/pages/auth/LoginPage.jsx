import styled from "styled-components";

const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28vw;
  padding: 2rem;
  border-radius: 8px;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: white;
  font-size: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  outline: none;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #ff4973;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff2a5f;
  }
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm>
        <Title>로그인</Title>
        <Input type="email" placeholder="이메일을 입력해주세요!" />
        <Input type="password" placeholder="비밀번호를 입력해주세요!" />
        <LoginButton>로그인</LoginButton>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
