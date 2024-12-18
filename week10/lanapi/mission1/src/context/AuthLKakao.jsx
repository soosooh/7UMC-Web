import axios from 'axios';
import { REST_API_KEY, getRedirectURI } from './apiConfig';  // 경로는 실제 파일 위치에 맞게 수정해주세요

// 카카오 인증 URL 생성 함수
const getKakaoAuthURL = () => {
    const baseUrl = 'https://kauth.kakao.com/oauth/authorize';
    const redirectUri = getRedirectURI();
    
    const params = new URLSearchParams({
        client_id: REST_API_KEY,
        redirect_uri: redirectUri,
        response_type: 'code',
        scope: 'profile_nickname'
    });
    
    return `${baseUrl}?${params.toString()}`;
};

export const handleKakaoLogin = () => {
    const redirectUri = getRedirectURI();
    const authUrl = getKakaoAuthURL();
    
    console.log('Redirect URI:', redirectUri);
    console.log('Kakao Auth URL:', authUrl);
    
    window.location.href = authUrl;
};

export const getKakaoToken = async (authCode, navigate) => {
    try {
        const redirectUri = getRedirectURI();
        console.log('Current Redirect URI:', redirectUri);
        console.log('Auth Code:', authCode);
        
        const params = new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: REST_API_KEY,
            redirect_uri: redirectUri,
            code: authCode
        });

        console.log('Request Params:', Object.fromEntries(params));

        const response = await axios.post(
            'https://kauth.kakao.com/oauth/token',
            params,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                }
            }
        );

        console.log('Token Response:', response.data);

        const { access_token, refresh_token } = response.data;
        
        localStorage.setItem('kakao_access_token', access_token);
        localStorage.setItem('kakao_refresh_token', refresh_token);

        await fetchKakaoUserInfo(access_token, navigate);
    } catch (error) {
        console.error('토큰 발급 오류:', error);
        console.error('토큰 발급 상세 오류:', error.response ? error.response.data : error.message);
        alert('로그인 중 문제가 발생했습니다.');
        navigate('/login');
    }
};

export const fetchKakaoUserInfo = async (accessToken, navigate) => {
    try {
        const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        console.log('Full User Response:', response.data);

        const { id, properties, kakao_account } = response.data;
        const userInfo = {
            kakaoId: id,
            nickname: properties?.nickname || kakao_account?.profile?.nickname,
            loginType: 'kakao'
        };

        console.log('Processed User Info:', userInfo);
        
        localStorage.setItem('user', JSON.stringify(userInfo));
        navigate('/');
    } catch (error) {
        console.error('사용자 정보 가져오기 오류:', error);
        console.error('상세 오류:', error.response ? error.response.data : error.message);
        alert('사용자 정보를 가져오는 중 문제가 발생했습니다.');
        navigate('/login');
    }
};

export const handleAuthCode = (navigate) => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get('code');
    
    console.log('Handle Auth Code - Current URL:', window.location.href);
    console.log('Extracted Auth Code:', authCode);
    
    if (authCode) {
        getKakaoToken(authCode, navigate);
    } else {
        console.error('No auth code found');
        navigate('/login');
    }
};