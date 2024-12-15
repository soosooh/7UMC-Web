import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KakaoButton = () => {
  const navigate = useNavigate();
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:5173/login/auth';

  // 카카오 로그인 버튼 클릭 시 실행
  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  // 액세스 토큰 발급 함수
  const getKakaoToken = async (authCode) => {
    try {
      console.log('인가 코드:', authCode); // 디버깅용 로그
      const response = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        null,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          params: {
            grant_type: 'authorization_code',
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: authCode,
          },
        }
      );

      const { access_token, refresh_token } = response.data;
      console.log('토큰 발급 성공:', response.data); // 디버깅용 로그

      // 토큰 저장
      localStorage.setItem('kakao_access_token', access_token);
      localStorage.setItem('kakao_refresh_token', refresh_token);

      // 메인 페이지로 이동
      navigate('/');
    } catch (error) {
      console.error('토큰 발급 실패:', error.response?.data || error);
      alert('로그인 중 문제가 발생했습니다.');
      navigate('/login'); // 실패 시 로그인 페이지로 이동
    }
  };

  // URL에서 카카오 인증 코드 처리
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get('code');

    if (authCode) {
      getKakaoToken(authCode);
    } else {
      console.log('인가 코드가 없음: 메인 화면으로 이동'); // 디버깅용 로그
    }
  }, []);

  return (
    <StyledButton onClick={handleKakaoLogin}>
      카카오톡으로 로그인
    </StyledButton>
  );
};

// Styled Component
const StyledButton = styled.button`
  background-color: #fee500;
  color: #000000;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 20px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin: 10px auto;
  display: block;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffd700;
  }

  &:active {
    background-color: #eac400;
  }
`;

export default KakaoButton;




// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const KakaoButton = () => {
//  const navigate = useNavigate();
//  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

//  // 카카오 로그인 버튼 핸들러
//  const handleKakaoLogin = () => {
//    const REDIRECT_URI = 'http://localhost:5173/login/auth';
//    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
//    window.location.href = kakaoAuthUrl;
//  };

//  // 인가 코드로 토큰 발급 함수
//  const getKakaoToken = async (authCode) => {
//    try {
//      const REDIRECT_URI = 'http://localhost:5173/login/auth';
//      const response = await axios.post(
//        'https://kauth.kakao.com/oauth/token',
//        null,
//        {
//          headers: {
//            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
//          },
//          params: {
//            grant_type: 'authorization_code',
//            client_id: REST_API_KEY,
//            redirect_uri: REDIRECT_URI,
//            code: authCode,
//          },
//        }
//      );

//      // 토큰 로컬 스토리지에 저장
//      const { access_token, refresh_token } = response.data;
//      localStorage.setItem('kakao_access_token', access_token);
//      localStorage.setItem('kakao_refresh_token', refresh_token);

//      // 메인 페이지로 이동
//      navigate('/');
//    } catch (error) {
//      console.error('토큰 발급 오류:', error);
//      alert('로그인 중 문제가 발생했습니다.');
//      navigate('/login');
//    }
//  };

//  // 컴포넌트 마운트 시 인가 코드 처리
//  useEffect(() => {
//    const urlParams = new URLSearchParams(window.location.search);
//    const authCode = urlParams.get('code');

//    if (authCode) {
//      getKakaoToken(authCode);
//    }
//  }, []);

//  return (
//    <StyledButton onClick={handleKakaoLogin}>
//      카카오톡으로 로그인
//    </StyledButton>
//  );
// };

// // Styled Component
// const StyledButton = styled.button`
//  background-color: #fee500;
//  color: #000000;
//  border: none;
//  border-radius: 4px;
//  font-size: 16px;
//  font-weight: bold;
//  padding: 12px 20px;
//  cursor: pointer;
//  width: 100%;
//  max-width: 300px;
//  margin: 10px auto;
//  display: block;
//  text-align: center;
//  transition: background-color 0.3s;

//  &:hover {
//    background-color: #ffd700;
//  }

//  &:active {
//    background-color: #eac400;
//  }
// `;

// export default KakaoButton;
