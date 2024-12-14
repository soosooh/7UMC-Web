export const getRedirectURI = () => {
  const hostname = window.location.hostname;

  if (hostname === 'localhost') {
    return 'http://localhost:5173/login/auth';
  } else if (hostname === 'haencha.netlify.app') {
    return 'https://haencha.netlify.app/login/auth';
  } else if (hostname === 'main--haencha.netlify.app') {
    return 'https://main--haencha.netlify.app/login/auth';
  } else {
    throw new Error(`Invalid hostname: ${hostname}`);
  }
};