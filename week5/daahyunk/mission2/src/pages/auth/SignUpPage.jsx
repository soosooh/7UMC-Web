import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../utils/validationSchema.js";
import styled from "styled-components";

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
`;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    criteriaMode: "all", 
  });

  const onSubmit = (data) => {
    console.log("회원가입 데이터:", data); // 제출된 데이터 확인
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
          type="text"
          placeholder="생년월일을 입력해주세요 (YYYY-MM-DD)"
          {...register("birthDate")}
        />
        {errors.birthDate && <ErrorMessage>{errors.birthDate.message}</ErrorMessage>}

        <Input
          type="text"
          placeholder="전화번호를 입력해주세요 (010-XXXX-XXXX)"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>}

        <SubmitButton type="submit" disabled={!isValid || isSubmitting}>
          회원가입
        </SubmitButton>
      </SignUpForm>
    </SignUpPageContainer>
  );
};

export default SignUpPage;
