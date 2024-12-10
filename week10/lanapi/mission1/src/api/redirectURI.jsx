// src/api/redirectURI.js
export const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

export const getRedirectURI = () => {
  const currentHost = window.location.host;
  
  const redirectURIs = {
    'localhost:5173': 'http://localhost:5173/login/auth',
    'lanapi-week10-mission1.netlify.app': 'https://lanapi-week10-mission1.netlify.app/login/auth',
    'main-lanapi-week10-mission1.netlify.app': 'https://main-lanapi-week10-mission1.netlify.app/login/auth',
  };

  return redirectURIs[currentHost] || 'http://localhost:5173/login/auth';
};