import React from 'react';
import styled from 'styled-components';
import { getRedirectURI } from '../../api/redirectURI'; // 이전과 동일한 import
import kakaoBtn from '../../assets/kakaoBtn.png'; // 이미지 import

const KakaoButton = () => {
  const handleKakaoLogin = () => {
    const kakaoToken = import.meta.env.VITE_KAKAO_TOKEN; // REST API 키
    const redirectURI = getRedirectURI(); // Redirect URI

    // 카카오 로그인 화면 URL 생성
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoToken}&redirect_uri=${redirectURI}&response_type=code`;

    // 카카오 로그인 페이지로 이동
    window.location.href = kakaoAuthUrl;
  };

  return (
    <StyledButton onClick={handleKakaoLogin}>
      <ButtonImage src={kakaoBtn} alt="카카오 로그인" />
    </StyledButton>
  );
};

export default KakaoButton;

// Styled Components
const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin: 10px auto;
  display: block;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ButtonImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;