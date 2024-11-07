import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { registerUser } from "../apis/authService";
import { useEffect, useState } from "react";

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

const GenderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
`;

const HiddenRadio = styled.input`
  display: none;
`;

const GenderLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "#ff4d78" : "transparent")};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? "#ff1c47" : "#f0f0f0")};
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 0.875rem;
  margin: 10px 0 0 0;
`;

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("이메일을 반드시 입력해주세요.")
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "올바른 이메일 형식이 아닙니다."),
    password: yup.string().required("비밀번호를 반드시 입력해주세요.").min(8, "비밀번호는 8자 이상이어야 합니다.").max(16, "비밀번호는 16자 이하여야 합니다."),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("비밀번호 검증은 필수 입력 요소입니다."),
    gender: yup.string().required("성별을 선택해주세요."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const selectedGender = watch("gender");

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password, data.passwordCheck);
      setSuccess("회원가입에 성공했습니다!");
      setError("");
      // 회원가입 성공 시 로그인 페이지로 이동
      setTimeout(() => {
        window.location.href = "/login"; // 필요에 따라 경로를 설정하세요
      }, 2000);
    } catch (error) {
      setError(error.message || "회원가입에 실패했습니다. 다시 시도해 주세요.");
      setSuccess("");
    }
  };

  const handleBlur = (field) => {
    trigger(field);
  };

  return (
    <FormContainer>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" {...register("email")} placeholder="이메일을 입력해주세요!" onBlur={() => handleBlur("email")} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input type="password" {...register("password")} placeholder="비밀번호를 입력해주세요!" onBlur={() => handleBlur("password")} />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        <Input type="password" {...register("passwordCheck")} placeholder="비밀번호를 확인해주세요!" onBlur={() => handleBlur("passwordCheck")} />
        {errors.passwordCheck && <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>}

        <GenderContainer>
          <GenderLabel selected={selectedGender === "male"}>
            <HiddenRadio type="radio" value="male" {...register("gender")} />
            남성
          </GenderLabel>
          <GenderLabel selected={selectedGender === "female"}>
            <HiddenRadio type="radio" value="female" {...register("gender")} />
            여성
          </GenderLabel>
        </GenderContainer>
        {errors.gender && <ErrorMessage>{errors.gender.message}</ErrorMessage>}

        <SubmitButton type="submit" disabled={!isValid}>
          회원가입
        </SubmitButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
      </Form>
    </FormContainer>
  );
};

export default SignUp;
