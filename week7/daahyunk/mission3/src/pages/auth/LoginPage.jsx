import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { validateLogin } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../api/auth/userLogin";
import { useAuth } from "../../context/AuthContext";

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

  @media (max-width: 768px) {
    width: 80vw;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 90vw;
  }
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: white;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 0.9rem;
  margin-top: 1rem;
  border: none;
  border-radius: 6px;
  outline: none;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.8rem;
  }
`;

const ErrorMessage = styled.span`
  width: 100%;
  color: red;
  font-size: 0.8rem;
  margin-top: 0.8rem;
  margin-bottom: 0.3rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
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

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const { errors, touched, isFormValid, getTextInputProps } = useForm(
    { email: "", password: "" },
    validateLogin
  );
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = getTextInputProps("email").value;
    const password = getTextInputProps("password").value;

    try {
      const { accessToken, refreshToken } = await loginUser({ email, password });
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      login(email.split("@")[0]);
      alert("로그인 성공! 🎉");
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "로그인 실패");
    }
  };

  return (
    <LoginPageContainer>
      <LoginForm>
        <Title>로그인</Title>
        <Input
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...getTextInputProps("email")}
        />
        {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...getTextInputProps("password")}
        />
        {touched.password && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginButton disabled={!isFormValid} onClick={handleLogin}>
          로그인
        </LoginButton>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;