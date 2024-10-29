import styled from "styled-components";
import { useValidation } from "../../hooks/useValidation.js";

const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const LoginForm = styled.div`
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
  font-size: 0.9rem;
  margin-top: 1rem;
  border: none;
  border-radius: 6px;
  outline: none;
`;

const ErrorMessage = styled.span`
  width: 100%;
  color: red;
  font-size: 0.8rem;
  margin-top: 0.8rem;
  margin-bottom: 0.3rem;
  text-align: left;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => (props.disabled ? "#555" : "#ff4973")};
  color: white;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
  border: none;
  border-radius: 6px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#555" : "#ff2a5f")};
  }
`;

const LoginPage = () => {
  const {
    email,
    password,
    emailError,
    passwordError,
    isFormValid,
    handleEmailChange,
    handlePasswordChange,
    handleBlur,
  } = useValidation();

  return (
    <LoginPageContainer>
      <LoginForm>
        <Title>로그인</Title>
        <Input
          type="email"
          placeholder="이메일을 입력해주세요!"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => handleBlur("email")}
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          value={password}
          onChange={handlePasswordChange}
          onBlur={() => handleBlur("password")}
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        
        <LoginButton disabled={!isFormValid}>로그인</LoginButton>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
