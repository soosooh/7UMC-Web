import React, { useEffect, useContext } from 'react'; // useContext 추가
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getRedirectURI } from '../api/redirectURI';
import { AuthContext } from '../context/AuthContext'; // AuthContext 추가

const KakaoAuthHandler = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const authCode = urlParams.get('code');
        
        if (!authCode) {
          console.error('인가 코드가 없습니다.');
          navigate('/login');
          return;
        }
        
        const accessToken = await getAccessToken(authCode);
        const userInfo = await getUserInfo(accessToken);
        
        // 이메일이 없는 경우 기본값 대신 에러 처리
        if (!userInfo.email) {
          alert('카카오 계정의 이메일 정보를 가져올 수 없습니다.');
          navigate('/login');
          return;
        }
        
        login({ email: userInfo.email }); // 이메일 데이터 확인
        console.log('Kakao Login Email:', userInfo.email);
        
        localStorage.setItem('kakaoAccessToken', accessToken);
        
        navigate('/');
      } catch (error) {
        console.error('카카오 인증 처리 실패:', error);
        navigate('/login');
      }
    };
    
    handleAuth();
  }, [navigate, login]);

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
       
       return {
         id,
         email: kakao_account?.email || 'No email provided'
       };
     } catch (error) {
       throw new Error('사용자 정보 가져오기 실패: ' + error.message);
     }
   };

   return <div>카카오 로그인 중입니다...</div>;
};

export default KakaoAuthHandler;