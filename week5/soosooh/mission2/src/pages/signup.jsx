import styled from "styled-components";
import useForm from "../hooks/use-form";
// import { validateSignUp } from "../utils/validate";
import { validateSignUp } from "../utils/validateZod";
const SignUpPage = () => {
  const signup = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    },
    validate: validateSignUp,
  });

  const handlePressSignUp = () => {
    const newErrors = signup.validate(signup.values);
    signup.setErrors(newErrors);

    // 오류가 없을 경우에만 데이터 출력
    if (!Object.values(newErrors).some((error) => error)) {
      console.log(
        signup.values.email,
        signup.values.password,
        signup.values.passwordCheck,
        signup.values.name
      );
    }
  };

  return (
    <SignUpContainer>
      <StyledInput
        type="text"
        placeholder="이름을 입력해주세요!"
        {...signup.getTextInputProps("name")}
      />
      {signup.touched.name && signup.errors.name && (
        <ErrorText>{signup.errors.name}</ErrorText>
      )}
      <StyledInput
        error={signup.touched.email && signup.errors.email}
        type="email"
        placeholder="이메일을 입력해주세요!"
        {...signup.getTextInputProps("email")}
      />
      {signup.touched.email && signup.errors.email && (
        <ErrorText>{signup.errors.email}</ErrorText>
      )}
      <StyledInput
        error={signup.touched.password && signup.errors.password}
        type="password"
        placeholder="비밀번호를 입력해주세요!"
        {...signup.getTextInputProps("password")}
      />
      {signup.touched.password && signup.errors.password && (
        <ErrorText>{signup.errors.password}</ErrorText>
      )}
      <StyledInput
        error={signup.touched.passwordCheck && signup.errors.passwordCheck}
        type="password"
        placeholder="비밀번호를 다시 입력해주세요!"
        {...signup.getTextInputProps("passwordCheck")}
      />
      {signup.touched.passwordCheck && signup.errors.passwordCheck && (
        <ErrorText>{signup.errors.passwordCheck}</ErrorText>
      )}
      <StyledSubmit onClick={handlePressSignUp}>가입하기</StyledSubmit>
    </SignUpContainer>
  );
};

export default SignUpPage;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 17%;
  left: 40%;
`;
const StyledInput = styled.input`
  width: 450px;
  height: 50px;
  box-sizing: border-box;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  border: gray;
  border-radius: 8px;
  background-color: white;
  color: black;
`;

const StyledSubmit = styled.button`
  width: 450px;
  height: 50px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: #ff073d;
  border: #ff073d;
  border-radius: 8px;
`;
const ErrorText = styled.p`
  color: red;
  font-size: 12px;
`;
