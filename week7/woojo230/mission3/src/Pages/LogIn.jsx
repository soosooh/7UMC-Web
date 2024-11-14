import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { useState } from "react";
import { loginUser } from "../apis/authService";

// 스타일 정의
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: black;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

const Title = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  padding: 15px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px rgba(255, 105, 135, 0.6);
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: ${(props) => (props.disabled ? "gray" : "#ff4d78")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "gray" : "#ff1c47")};
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d78;
  font-size: 0.875rem;
  margin: 0;
`;

const LoginPage = () => {
  const [error, setError] = useState("");

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("이메일을 반드시 입력해주세요.")
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "올바른 이메일 형식이 아닙니다."),
    password: yup.string().required("비밀번호를 반드시 입력해주세요.").min(8, "비밀번호는 8자 이상이어야 합니다.").max(16, "비밀번호는 16자 이하여야 합니다."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleBlur = (field) => {
    trigger(field);
  };

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      window.location.href = "/movies";
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <FormContainer>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" {...register("email")} placeholder="이메일을 입력해주세요!" onBlur={() => handleBlur("email")} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input type="password" {...register("password")} placeholder="비밀번호를 입력해주세요!" onBlur={() => handleBlur("password")} />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        <SubmitButton type="submit" disabled={!isValid}>
          로그인
        </SubmitButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </FormContainer>
  );
};

export default LoginPage;
