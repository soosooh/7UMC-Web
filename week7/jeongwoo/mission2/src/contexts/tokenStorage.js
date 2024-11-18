const tokenStorage = {
  setTokens: (accessToken, refreshToken) => {
    if (!accessToken || !refreshToken) {
      console.error('Invalid tokens provided:', { accessToken, refreshToken });
      return;
    }
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  },
 
  getAccessToken: () => {
    const token = localStorage.getItem('accessToken');
    return token || null;
  },
 
  getRefreshToken: () => {
    const token = localStorage.getItem('refreshToken');
    return token || null;
  },
 
  removeTokens: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },
 
  isLoggedIn: () => {
    return !!localStorage.getItem('accessToken');
  }
 };
 
 export default tokenStorage;