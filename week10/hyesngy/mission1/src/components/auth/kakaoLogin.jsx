import React from 'react';
import styled from 'styled-components';
import kakaoLoginImg from '../../assets/images/kakaoLoginImg.png';
import { getKakaoLoginURL } from '../../api/auth/kakaoAuth';
import { useKakaoLogin } from '../../hooks/useKakaoLogin';

const KakaoLoginDiv = styled.img`
  width: 25rem;
  margin-top: 0.5rem;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 20rem;
  }
`;

const KakaoLogin = () => {
  useKakaoLogin();

  const handleLogin = () => {
    window.location.href = getKakaoLoginURL();
  };

  return (
    <div>
      <KakaoLoginDiv
        src={kakaoLoginImg}
        alt="kakaoLogin"
        onClick={handleLogin}
      />
    </div>
  );
};

export default KakaoLogin;