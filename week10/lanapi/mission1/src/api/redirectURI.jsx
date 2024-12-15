export const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

export const getRedirectURI = () => {
    const hostname = window.location.hostname;
    switch (hostname) {
        case 'localhost':
            return 'http://localhost:5173/login/auth';
        case 'lanapi-week10-mission1.netlify.app':
            return 'https://lanapi-week10-mission1.netlify.app/login/auth';
        case 'main--lanapi-week10-mission1.netlify.app':
            return 'https://main--lanapi-week10-mission1.netlify.app/login/auth';
        default:
            throw new Error('Unsupported hostname for redirect URI');
    }
};

export const KAKAO_AUTH_URL = () => {
    const redirectURI = getRedirectURI();
    return `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${redirectURI}&response_type=code`;
};
