export const getRedirectURI = () => {
  const hostname = window.location.hostname;
  if (hostname === 'localhost') {
    return 'http://localhost:5173/login/auth';
  } else if (hostname === 'jeongwoo-week10-mission1.netlify.app') {
    return 'https://jeongwoo-week10-mission1.netlify.app/login/auth';
  } else if (hostname.includes('netlify.app')) {
    return `https://${hostname}/login/auth`;
  }
  throw new Error(`Invalid hostname: ${hostname}`);
};

export const getLogoutRedirectURI = () => {
  const hostname = window.location.hostname;
  if (hostname === 'localhost') {
    return 'http://localhost:5173';
  } else if (hostname === 'jeongwoo-week10-mission1.netlify.app') {
    return 'https://jeongwoo-week10-mission1.netlify.app';
  } else if (hostname.includes('netlify.app')) {
    return `https://${hostname}`;
  }
  throw new Error(`Invalid hostname: ${hostname}`);
};