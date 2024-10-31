import styled from "styled-components";
import { useState } from "react";
import useForm from "../hooks/use-form";
import { validateLogin } from "../utils/validate";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: black;
  justify-content: center;
`;

const Title = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
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

  border: ${(props) => (props.error ? "4px solid red" : "1px solid #ccc")};
`;

const ErrorText = styled.h1`
  font-size: 12px;
  color: red;
`;

const Button = styled.button`
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

const LoginPage = () => {
  const Login = useForm({
    initialValue: {
      email: "",
      password: "",
      passwordCheck: "",
    },
    validate: validateLogin,
    mode: "onChange",
  });

  const handlePressLogin = (event) => {
    event.preventDefault(); // 기본 동작 막기
    console.log(Login.values.email, Login.values.password);
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Form>
        <Input
          error={Login.touched.email && Login.errors.email} //
          type={"email"} //
          placeholder={"이메일을 입력하세요"} //
          {...Login.getTextInputProps("email")}
        />
        {Login.touched.email && Login.errors.email && <ErrorText>{Login.errors.email}</ErrorText>}

        <Input
          error={Login.touched.password && Login.errors.password}
          type={"password"}
          placeholder={"비밀번호를 입력하세요"}
          {...Login.getTextInputProps("password")}
        />
        {Login.touched.password && Login.errors.password && <ErrorText>{Login.errors.password}</ErrorText>}

        <Input
          error={Login.touched.passwordCheck && Login.errors.passwordCheck}
          type={"password"}
          placeholder={"비밀번호 검증 또한 필수입니다"}
          {...Login.getTextInputProps("passwordCheck")}
        />
        {Login.touched.passwordCheck && Login.errors.passwordCheck && <ErrorText>{Login.errors.passwordCheck}</ErrorText>}

        <Button onClick={handlePressLogin} disabled={!Login.isValid}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
