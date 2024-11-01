import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { useEffect } from "react";

// 스타일 정의
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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

const SignUpPage = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("이메일을 반드시 입력해주세요.") // 빈 값일 때는 이 메시지가 먼저 출력됨
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "올바른 이메일 형식이 아닙니다."), // 형식 검사
    password: yup
      .string() //
      .required("비밀번호를 반드시 입력해주세요.") //
      .min(8, "비밀번호는 8자 이상이어야 합니다.") //
      .max(16, "비밀번호는 16자 이하여야 합니다."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange", // 입력할 때마다 유효성 검사를 실행
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  // 입력 필드에 대한 포커스 이벤트 핸들러
  const handleBlur = (field) => {
    trigger(field); // 포커스 아웃 시 해당 필드에 대해 유효성 검사 트리거
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
      </Form>
    </FormContainer>
  );
};

export default SignUpPage;
