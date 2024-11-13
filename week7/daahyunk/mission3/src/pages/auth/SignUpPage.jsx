import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../utils/validationSchema.js";
import styled from "styled-components";
import { registerUser } from "../../api/auth/userRegister";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUpPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const SignUpForm = styled.form`
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

const SubmitButton = styled.button`
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

const SignUpPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      alert("회원가입 완료! 🎉");
      navigate("/login");
    } catch (error) {
      setError(error.message || "회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <SignUpPageContainer>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <Title>회원가입</Title>
        <Input
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...register("password")}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        <Input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요!"
          {...register("passwordCheck")}
        />
        {errors.passwordCheck && <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton type="submit" disabled={!isValid}>
          회원가입
        </SubmitButton>
      </SignUpForm>
    </SignUpPageContainer>
  );
};

export default SignUpPage;