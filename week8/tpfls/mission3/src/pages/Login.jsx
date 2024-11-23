import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query"; // ✅ React Query
import * as z from "zod";
import { useNavigate } from "react-router-dom";

// 로그인 폼 유효성 검사 스키마
const loginSchema = z.object({
  email: z.string().email("올바른 이메일 형식이 아닙니다.").nonempty("이메일은 필수입니다."),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
});

const LoginPage = () => {
  const navigate = useNavigate();

  // React Hook Form 세팅
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  // useMutation: 로그인 API 호출 로직
  const loginMutation = useMutation(
    async (formData) => {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "로그인 실패");
      }

      return response.json();
    },
    {
      onSuccess: (data) => {
        console.log("로그인 성공:", data);
        alert("로그인 성공!");
        navigate("/dashboard"); // 성공 시 대시보드로 이동
      },
      onError: (error) => {
        console.error("로그인 실패:", error.message);
        alert("로그인 실패. 다시 시도해주세요.");
      },
    }
  );

  // 폼 제출 처리
  const onSubmit = (data) => {
    loginMutation.mutate(data); // loginMutation 실행
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" placeholder="이메일" {...register("email")} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input
          type="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <LoginButton type="submit" disabled={!isValid || loginMutation.isLoading}>
          {loginMutation.isLoading ? "로그인 중..." : "로그인"}
        </LoginButton>
      </Form>
    </Container>
  );
};

// 스타일링 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;

export default LoginPage;
