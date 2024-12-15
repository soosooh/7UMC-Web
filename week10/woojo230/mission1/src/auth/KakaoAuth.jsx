import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async (code) => {
      try {
        const response = await axios.post(
          'https://kauth.kakao.com/oauth/token',
          null,
          {
            params: {
              grant_type: 'authorization_code',
              client_id: import.meta.env.VITE_KAKAO_TOKEN,
              redirect_uri: 'http://localhost:5173/LogIn/auth',
              code: code,
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          }
        );

        const { access_token } = response.data;
        localStorage.setItem('kakaoToken', access_token);

        // 사용자 정보 가져오기
        const userInfoResponse = await axios.get(
          'https://kapi.kakao.com/v2/user/me',
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        // 닉네임 저장
        const nickname = userInfoResponse.data.properties.nickname;
        localStorage.setItem('nickname', nickname);

        navigate('/movies');
      } catch (error) {
        console.error('토큰 발급 실패:', error);
        navigate('/login');
      }
    };

    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      getToken(code);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return <div>로그인 처리 중...</div>;
};

export default KakaoAuth;
