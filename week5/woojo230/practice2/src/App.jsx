import styled from "styled-components";
import { useState } from "react";
import useForm from "./hooks/use-form";
import { validateLogin } from "./utils/validate";

const Container = styled.form`
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
  background-color: #ff4d78;
`;

const LoginPage = () => {
  const Login = useForm({
    initialValue: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });

  const handlePressLogin = (event) => {
    event.preventDefault(); // 기본 동작 막기
    console.log(Login.values.email, Login.values.password);
  };

  return (
    <Container>
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

      <Button onClick={handlePressLogin}>로그인</Button>
    </Container>
  );
};

export default LoginPage;
