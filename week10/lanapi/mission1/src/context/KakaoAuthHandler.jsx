import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getRedirectURI } from '../api/redirectURI';

const KakaoAuthHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // 현재 URL에서 인가 코드 추출
        const urlParams = new URLSearchParams(window.location.search);
        const authCode = urlParams.get('code');

        if (!authCode) {
          console.error('인가 코드가 없습니다.');
          navigate('/login');
          return;
        }

        // 인가 코드를 사용하여 액세스 토큰 요청
        const accessToken = await getAccessToken(authCode);

        // 사용자 정보 가져오기
        await getUserInfo(accessToken);

        // 홈 화면으로 이동
        navigate('/');
      } catch (error) {
        console.error('카카오 인증 처리 실패:', error);
        navigate('/login'); // 실패 시 로그인 페이지로 이동
      }
    };

    handleAuth();
  }, [navigate]);

  // 액세스 토큰 요청
  const getAccessToken = async (authCode) => {
    const redirectURI = getRedirectURI();
    try {
      const response = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        null,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          params: {
            grant_type: 'authorization_code',
            client_id: import.meta.env.VITE_KAKAO_REST_API_KEY,
            redirect_uri: redirectURI,
            code: authCode,
          },
        }
      );
      console.log('Access Token:', response.data.access_token);
      return response.data.access_token;
    } catch (error) {
      throw new Error('토큰 발급 실패: ' + error.message);
    }
  };

  // 사용자 정보 요청
  const getUserInfo = async (accessToken) => {
    try {
      const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });

      const { id, kakao_account } = response.data;

      // 사용자 정보 저장 (예: 로컬 스토리지)
      localStorage.setItem('kakaoUserId', id);
      localStorage.setItem('kakaoUserEmail', kakao_account?.email || 'No email provided');
    } catch (error) {
      throw new Error('사용자 정보 가져오기 실패: ' + error.message);
    }
  };

  return <div>카카오 로그인 중입니다...</div>;
};

export default KakaoAuthHandler;
