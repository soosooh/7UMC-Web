import styled from "styled-components";
import useForm from "../hooks/use-form";
import { validateLogin } from "../utils/validate";

const LogInPage = () => {
  const login = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });
  const handlePressLogin = () => {
    console.log(login.values.email, login.values.password);
  };

  return (
    <Container>
      <Input
        error={login.touched.email && login.errors.email}
        type={"email"}
        placeholder={"이메일을 입력해주세요! "}
        {...login.getTextInputProps("email")}
      />
      {login.touched.email && login.errors.email && (
        <ErrorText>{login.errors.email}</ErrorText>
      )}
      <Input
        error={login.touched.password && login.errors.password}
        type={"password"}
        placeholder={"비밀번호를 입력해주세요! "}
        {...login.getTextInputProps("password")}
      />
      {login.touched.password && login.errors.password && (
        <ErrorText>{login.errors.password}</ErrorText>
      )}
      <button onClick={handlePressLogin}>로그인</button>
    </Container>
  );
};

export default LogInPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 45%;
`;
const Input = styled.input`
  margin: 10px 0;
  padding: 8px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;

  border: ${(props) => (props.error ? "4px solid red" : "1px solid #ccc")};

  &:focus {
    border-color: #007bff;
  }
`;

const ErrorText = styled.h1`
  color: red;
  font-size: 12px;
`;
