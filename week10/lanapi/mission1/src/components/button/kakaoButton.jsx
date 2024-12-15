import React from 'react';
import styled from 'styled-components';

const KakaoButton = () => {
  // 환경변수에서 카카오 REST API 키 불러오기
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

  // 카카오 로그인 버튼 핸들러
  const handleKakaoLogin = () => {
    const REDIRECT_URI = 'http://localhost:5173/login/auth'; 
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <StyledButton onClick={handleKakaoLogin}>
      카카오톡으로 로그인
    </StyledButton>
  );
};

// Styled Component (이전과 동일)
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
// import { REST_API_KEY } from '../../api/redirectURI';

// const KakaoButton = () => {
//   const navigate = useNavigate();

//   // 카카오 로그인 버튼 핸들러
//   const handleKakaoLogin = () => {
//     // const REDIRECT_URI = 'http://localhost:5173/login/auth'; 
//     const REDIRECT_URI = 'https://kauth.kakao.com/oauth/authorize'; // 원하는 redirect_uri 설정

//     const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

//     window.location.href = kakaoAuthUrl; 
//   };

//   // 카카오 인증 완료 후 인가 코드 처리
//   useEffect(() => {
//     const handleKakaoCallback = async () => {
//       const urlParams = new URLSearchParams(window.location.search);
//       const authCode = urlParams.get('code');

//       if (authCode) {
//         await getAccessToken(authCode);
//       }
//     };

//     handleKakaoCallback(); // 인증 처리 함수 실행
//   }, []);

//   // 인가 코드를 사용하여 액세스 토큰 요청
//   const getAccessToken = async (authCode) => {
//     try {
//       // const REDIRECT_URI_1 = 'http://localhost:5173/login/auth'; // 동일한 redirect_uri 사용
//       // const REDIRECT_URI = 'https://kauth.kakao.com/oauth/authorize'; // 동일한 redirect_uri 사용
//       const { data } = await axios.post(
//         'https://kauth.kakao.com/oauth/token',
//         null,
//         {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
//           },
//           params: {
//             grant_type: 'authorization_code',
//             client_id: REST_API_KEY,
//             redirect_uri: REDIRECT_URI,
//             code: authCode,
//           },
//         }
//       );

//       const { access_token } = data;

//       // 로컬 스토리지에 토큰 저장
//       localStorage.setItem('kakao_access_token', access_token);
//       console.log('Access Token:', access_token);

//       // 로그인 성공 시 홈 화면으로 이동
//       navigate('/');
//     } catch (error) {
//       console.error('토큰 발급 실패:', error);
//       alert('로그인 중 문제가 발생했습니다. 다시 시도해주세요.');
//       navigate('/login'); // 실패 시 로그인 페이지로 리다이렉트
//     }
//   };

//   return (
//     <StyledButton onClick={handleKakaoLogin}>
//       카카오톡으로 로그인
//     </StyledButton>
//   );
// };

// // Styled Component
// const StyledButton = styled.button`
//   background-color: #fee500;
//   color: #000000;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   font-weight: bold;
//   padding: 12px 20px;
//   cursor: pointer;
//   width: 100%;
//   max-width: 300px;
//   margin: 10px auto;
//   display: block;
//   text-align: center;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #ffd700;
//   }

//   &:active {
//     background-color: #eac400;
//   }
// `;

// export default KakaoButton;

