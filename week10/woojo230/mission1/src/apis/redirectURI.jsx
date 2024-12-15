const getRedirectURI = () => {
  const currentURL = window.location.href;

  if (currentURL.includes('localhost:5173')) {
    return 'http://localhost:5173/LogIn/auth';
  } else if (currentURL.includes('woojo230-week10-mission1.netlify.app')) {
    return 'https://woojo230-week10-mission1.netlify.app/LogIn/auth';
  } else {
    console.error('알 수 없는 도메인입니다.');
    return 'https://woojo230-week10-mission1.netlify.app/LogIn/auth';
  }
};

export default getRedirectURI;
