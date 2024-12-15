import styled from 'styled-components';
import getRedirectURI from '../../apis/redirectURI';

const KakaoButtonWrapper = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 8px;
  background: none;
  cursor: pointer;
  padding: 0;
  margin-top: 10px;
`;

const KakaoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const KakaoButton = () => {
  const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_TOKEN;
  const REDIRECT_URI = getRedirectURI();

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <KakaoButtonWrapper onClick={handleLogin}>
      <KakaoImage src="/kakaoBtn.png" alt="카카오 로그인" />
    </KakaoButtonWrapper>
  );
};

export default KakaoButton;
