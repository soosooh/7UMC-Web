import styled from "styled-components";
import kakaoImg from "../../assets/images/kakaoBtn.png";
import getRedirectURI from "../../apis/redirectURI";
const KakaoLogin = styled.img`
  width: 450px;
  margin-top: 40px;

  @media (max-width: 1200px) {
    width: 400px;
    margin-right: 50px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 50px;
  }
`;
const kakaoButton = () => {
  const handleKakaoLogin = () => {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_TOKEN; // Vite 환경변수 사용
    const redirectURI = getRedirectURI();
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${redirectURI}`;

    // 카카오 로그인 페이지로 리다이렉트
    window.location.href = kakaoAuthURL;
  };
  return (
    <KakaoLogin
      src={kakaoImg}
      alt="kakaoLoginImg"
      onClick={handleKakaoLogin}
    ></KakaoLogin>
  );
};

export default kakaoButton;
