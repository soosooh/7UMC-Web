import axios from 'axios';

const REDIRECT_URIS = {
  local: 'http://localhost:5173/login/auth',
  netlifyMain: 'https://lanapi-week10-mission1.netlify.app/login/auth',
  netlifySubdomain: 'https://main-lanapi-week10-mission1.netlify.app/login/auth'
};

const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

const REDIRECT_URI = (() => {
  const hostname = window.location.hostname;
  
  if (hostname === 'localhost') return REDIRECT_URIS.local;
  if (hostname === 'lanapi-week10-mission1.netlify.app') return REDIRECT_URIS.netlifyMain;
  if (hostname === 'main-lanapi-week10-mission1.netlify.app') return REDIRECT_URIS.netlifySubdomain;
  
  return REDIRECT_URIS.local;
})();

const KAKAO_AUTH_URL = (() => {
  const baseUrl = 'https://kauth.kakao.com/oauth/authorize';
  const params = new URLSearchParams({
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: 'profile_nickname'
  });
  
  return `${baseUrl}?${params.toString()}`;
})();

export const handleKakaoLogin = () => {
  console.log('Redirect URI:', REDIRECT_URI);
  console.log('Kakao Auth URL:', KAKAO_AUTH_URL);
  window.location.href = KAKAO_AUTH_URL;
};

export const getKakaoToken = async (authCode, navigate) => {
  try {
    console.log('Current Redirect URI:', REDIRECT_URI);
    console.log('Auth Code:', authCode);
    
    // FormData 또는 URLSearchParams 사용
    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
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
    console.error('토큰 발급 오류 전체:', error);
    console.error('토큰 발급 오류 상세:', error.response ? error.response.data : error.message);
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
    };

    console.log('Fetched User Info:', userInfo);

    localStorage.setItem('kakao_user', JSON.stringify(userInfo));
    navigate('/');
  } catch (error) {
    console.error('사용자 정보 가져오기 전체 오류:', error);
    console.error('사용자 정보 가져오기 상세 오류:', error.response ? error.response.data : error.message);
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
