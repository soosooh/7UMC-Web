import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query"; // ✅ Correct

import * as z from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email("유효한 이메일 형식이어야 합니다.").min(1, "이메일은 필수입니다."),
  password: z
    .string()
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .max(16, "비밀번호는 16자 이하이어야 합니다."),
  passwordCheck: z.string().min(1, "비밀번호 확인은 필수입니다."),
}).superRefine(({ password, passwordCheck }, ctx) => {
  if (password !== passwordCheck) {
    ctx.addIssue({
      path: ["passwordCheck"],
      message: "비밀번호가 일치하지 않습니다.",
    });
  }
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const signUpMutation = useMutation(
    (formData) =>
      fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }),
    {
      onSuccess: () => {
        alert("회원가입 성공!");
        navigate("/login");
      },
      onError: () => {
        alert("회원가입 실패. 다시 시도해주세요.");
      },
    }
  );

  const onSubmit = (data) => {
    signUpMutation.mutate(data);
  };

  return (
    <Container>
      <Title>회원가입</Title>
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

        <Input
          type="password"
          placeholder="비밀번호 확인"
          {...register("passwordCheck")}
        />
        {errors.passwordCheck && (
          <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>
        )}

        <LoginButton type="submit" disabled={!isValid}>
          회원가입
        </LoginButton>
      </Form>
    </Container>
  );
};

// 스타일링 코드는 이전과 동일합니다.
export default SignUpPage;
