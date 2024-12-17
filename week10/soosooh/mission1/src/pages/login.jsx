import styled from "styled-components";
import axios from "axios";
import getRedirectURI from "../apis/redirectURI";
import useForm from "../hooks/use-form";
import { useEffect } from "react";
import { validateLogin } from "../utils/validate";
import { axiosAuth } from "../apis/axios-auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import KakaoButton from "../components/button/kakaoButton";
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
  const location = useLocation();
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
      mutation.mutate({
        email: login.values.email,
        password: login.values.password,
      });
    }
  };

  const mutation = useMutation({
    mutationFn: async (userData) => {
      return await axiosAuth.post("/auth/login", userData);
    },
    onSuccess: (response) => {
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
    },
    onError: (error) => {
      console.error(
        "로그인 실패:",
        error.response ? error.response.data : error.message
      );
      alert(
        `로그인 실패: ${
          error.response?.data?.message || "서버 오류가 발생했습니다."
        }`
      );
    },
  });

  // 카카오 로그인 토큰 발급 및 사용자 정보 처리
  const handleKakaoAuth = async (authCode) => {
    try {
      // 1. 카카오 토큰 요청
      const tokenResponse = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        new URLSearchParams({
          grant_type: "authorization_code",
          client_id: import.meta.env.VITE_KAKAO_TOKEN,
          redirect_uri: getRedirectURI(),
          code: authCode,
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      const { access_token } = tokenResponse.data;

      // 2. 사용자 정보 요청
      const userResponse = await axios.get(
        "https://kapi.kakao.com/v2/user/me",
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );

      const nickname = userResponse.data.kakao_account.profile.nickname;

      // 3. 사용자 정보 및 토큰 저장
      localStorage.setItem("kakaoAccessToken", access_token);
      localStorage.setItem("nickname", nickname);

      console.log("카카오 사용자 정보:", userResponse.data); // 사용자 정보 로그 출력
      alert(`${nickname}님, 카카오 로그인 성공!`);

      navigate("/"); // 홈으로 이동
      window.location.reload();
    } catch (error) {
      console.error("카카오 로그인 실패:", error);
      alert("카카오 로그인에 실패했습니다.");
    }
  };

  // URL에서 인가 코드 추출 및 처리
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const authCode = urlParams.get("code"); // URL에서 code 파라미터 추출

    if (authCode) {
      console.log("인가 코드:", authCode); // 인가 코드 로그 출력
      handleKakaoAuth(authCode); // 인가 코드로 토큰 요청 및 사용자 정보 처리
    }
  }, [location]);
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
      <StyledSubmit onClick={handlePressLogin} disabled={mutation.isLoading}>
        로그인
      </StyledSubmit>
      <KakaoButton />
    </LogInContainer>
  );
};

export default LogInPage;
