import styled from "styled-components";
import useForm from "../hooks/use-form";
import { validateLogin } from "../utils/validate";
import { axiosAuth } from "../apis/axios-auth";
import { useNavigate } from "react-router-dom";

const LogInContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 35%;
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

const LogInPage = () => {
  const navigate = useNavigate();
  const login = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });

  const handlePressLogin = async () => {
    const newErrors = login.validate(login.values);
    login.setErrors(newErrors);

    // 오류가 없을 경우에만 요청 진행
    if (!Object.values(newErrors).some((error) => error)) {
      try {
        const response = await axiosAuth.post("/auth/login", {
          email: login.values.email,
          password: login.values.password,
        });
        const { accessToken, refreshToken } = response.data;

        // 토큰을 로컬 저장소에 저장
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        const userName = login.values.email.split("@")[0];
        localStorage.setItem("userName", userName);
        alert("로그인 성공!");
        console.log("로그인 성공:", response.data);
        navigate("/");
        window.location.reload();
      } catch (error) {
        console.error(
          "로그인 실패:",
          error.response ? error.response.data : error.message
        );
      }
    }
  };

  return (
    <LogInContainer>
      <InputWrapper>
        <StyledInput
          error={login.touched.email && login.errors.email}
          type={"email"}
          placeholder={"이메일을 입력해주세요! "}
          {...login.getTextInputProps("email")}
        />
        {login.touched.email && login.errors.email && (
          <ErrorText>{login.errors.email}</ErrorText>
        )}
      </InputWrapper>
      <InputWrapper>
        <StyledInput
          error={login.touched.password && login.errors.password}
          type={"password"}
          placeholder={"비밀번호를 입력해주세요! "}
          {...login.getTextInputProps("password")}
        />
        {login.touched.password && login.errors.password && (
          <ErrorText>{login.errors.password}</ErrorText>
        )}
      </InputWrapper>
      <StyledSubmit onClick={handlePressLogin}>로그인</StyledSubmit>
    </LogInContainer>
  );
};

export default LogInPage;
