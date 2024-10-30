import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

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

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("이메일을 반드시 입력해주세요.")
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "올바른 이메일 형식이 아닙니다."),
    password: yup.string().required("비밀번호를 반드시 입력해주세요.").min(8, "비밀번호는 8자 이상이어야 합니다.").max(16, "비밀번호는 16자 이하여야 합니다."),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.") //yup에서 oneOf 메서드를 사용 -> 특정 필드와 값이 일치하는지 확인
      .required("비밀번호 검증은 필수 입력 요소입니다."),
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

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  const handleBlur = (field) => {
    trigger(field);
  };

  return (
    <FormContainer>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" {...register("email")} placeholder="이메일을 입력해주세요!" onBlur={() => handleBlur("email")} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input type="password" {...register("password")} placeholder="비밀번호를 입력해주세요!" onBlur={() => handleBlur("password")} />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        <Input type="password" {...register("passwordCheck")} placeholder="비밀번호를 확인해주세요!" onBlur={() => handleBlur("passwordCheck")} />
        {errors.passwordCheck && <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>}

        <SubmitButton type="submit" disabled={!isValid}>
          로그인
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default Login;
