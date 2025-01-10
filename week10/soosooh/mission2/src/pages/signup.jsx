import styled from "styled-components";
import useForm from "../hooks/use-form";
// import { validateSignUp } from "../utils/validate";
import { validateSignUp } from "../utils/validateZod";
import { axiosAuth } from "../apis/axios-auth";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 17%;
  left: 40%;

  @media screen and (max-width: 768px) {
    position: static;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 450px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 1200px) {
    width: 400px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 1200px) {
    width: 400px;
    margin-right: 50px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 50px;
  }
`;
const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  position: absolute;
  top: 55px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const SignUpPage = () => {
  const navigate = useNavigate();
  const signup = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    },
    validate: validateSignUp,
  });

  const mutation = useMutation({
    mutationFn: async (userData) => {
      return await axiosAuth.post("/auth/register", userData); // 바꿈
    },
    onSuccess: () => {
      alert("회원가입 성공!");
      navigate("/login");
    },
    onError: (error) => {
      alert(
        "회원가입 실패: " +
          (error.response ? error.response.data : error.message) // 바꿈
      );
      console.error(
        "회원가입 실패:",
        error.response ? error.response.data : error.message // 바꿈
      );
    },
  });

  const handlePressSignUp = () => {
    const newErrors = signup.validate(signup.values);
    signup.setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      mutation.mutate({
        name: signup.values.name,
        email: signup.values.email,
        password: signup.values.password,
        passwordCheck: signup.values.passwordCheck,
      });
    }
  };

  return (
    <SignUpContainer>
      <InputWrapper>
        <StyledInput
          type="text"
          placeholder="이름을 입력해주세요!"
          {...signup.getTextInputProps("name")}
        />
        {signup.touched.name && signup.errors.name && (
          <ErrorText>{signup.errors.name}</ErrorText>
        )}
      </InputWrapper>
      <InputWrapper>
        <StyledInput
          error={signup.touched.email && signup.errors.email}
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...signup.getTextInputProps("email")}
        />
        {signup.touched.email && signup.errors.email && (
          <ErrorText>{signup.errors.email}</ErrorText>
        )}
      </InputWrapper>
      <InputWrapper>
        <StyledInput
          error={signup.touched.password && signup.errors.password}
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...signup.getTextInputProps("password")}
        />
        {signup.touched.password && signup.errors.password && (
          <ErrorText>{signup.errors.password}</ErrorText>
        )}
      </InputWrapper>
      <InputWrapper>
        <StyledInput
          error={signup.touched.passwordCheck && signup.errors.passwordCheck}
          type="password"
          placeholder="비밀번호를 다시 입력해주세요!"
          {...signup.getTextInputProps("passwordCheck")}
        />
        {signup.touched.passwordCheck && signup.errors.passwordCheck && (
          <ErrorText>{signup.errors.passwordCheck}</ErrorText>
        )}
      </InputWrapper>
      <StyledSubmit
        onClick={handlePressSignUp}
        disabled={mutation.isLoading} // 로딩 상태에서 버튼 비활성화
      >
        가입하기
      </StyledSubmit>
    </SignUpContainer>
  );
};

export default SignUpPage;
