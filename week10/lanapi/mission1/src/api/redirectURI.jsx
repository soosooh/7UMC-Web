export const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

export const getRedirectURI = () => {
    const hostname = window.location.hostname;

    if (hostname === 'localhost') {
        return 'http://localhost:5173/login/auth';
    } else if (hostname === 'lanapi-week10-final.netlify.app') {
        return 'https://lanapi-week10-final.netlify.app/login/auth';
    } else if (hostname === 'main-lanapi-week10-final.netlify.app') {
        return 'https://main-lanapi-week10-final.netlify.app/login/auth';
    } else {
        throw new Error('Error: ', error);
    }
};

