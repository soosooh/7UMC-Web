const getRedirectURI = () => {
  const currentURL = window.location.origin;

  switch (currentURL) {
    case 'https://hyeok02-week10-mission1.netlify.app':
      return 'https://hyeok02-week10-mission1.netlify.app/login/auth';
    case 'https://main--hyeok02-week10-mission1.netlify.app':
      return 'https://main--hyeok02-week10-mission1.netlify.app/login/auth';
    case 'http://localhost:5173':
      return 'http://localhost:5173/login/auth';
    default:
      console.error('올바른 redirectURI를 찾을 수 없습니다.');
      return '';
  }
};

// Named Export
export { getRedirectURI };
