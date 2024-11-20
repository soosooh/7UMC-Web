// import axios from 'axios';

// const apiClient = axios.create({
//   baseURL: '/auth',  // Vite 프록시 경로
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   withCredentials: true,
// });

// apiClient.interceptors.request.use(
//   async (config) => {
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken) {
//       config.headers['Authorization'] = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // 응답 인터셉터 설정
// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem('refreshToken');

//       if (refreshToken) {
//         try {
//           const response = await axios.post('/token/access', null, {
//             headers: {
//               Authorization: `Bearer ${refreshToken}`,
//             },
//           });

//           const { accessToken, refreshToken: newRefreshToken } = response.data;
//           localStorage.setItem('accessToken', accessToken);
//           localStorage.setItem('refreshToken', newRefreshToken);

//           originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
//           return apiClient(originalRequest);
//         } catch (refreshError) {
//           console.error('토큰 갱신 실패:', refreshError);
//           localStorage.removeItem('accessToken');
//           localStorage.removeItem('refreshToken');
//           window.location.href = '/login';
//         }
//       } else {
//         window.location.href = '/login';
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// // 로그인 요청 함수
// export const signIn = async ({ email, password }) => {
//   try {
//     const response = await apiClient.post('/login', { email, password }); // /auth/login
//     const { accessToken, refreshToken } = response.data;
//     localStorage.setItem('accessToken', accessToken);
//     localStorage.setItem('refreshToken', refreshToken);
//     return response.data;
//   } catch (error) {
//     alert('로그인 실패: ' + (error.response?.data?.message || '알 수 없는 오류가 발생했습니다.'));
//     throw error;
//   }
// };

// // 기타 요청 함수들
// export const signUp = async ({ email, password, passwordCheck }) => {
//   try {
//     const response = await apiClient.post('/register', { email, password, passwordCheck });
//     return response.data;
//   } catch (error) {
//     alert('회원가입 실패: ' + (error.response?.data?.message || '알 수 없는 오류가 발생했습니다.'));
//     throw error;
//   }
// };

// export const getUserInfo = async () => {
//   try {
//     const response = await apiClient.get('/user/me');
//     return response.data;
//   } catch (error) {
//     alert('유저 정보를 불러오는 데 실패했습니다.');
//     throw error;
//   }
// };

// export const signOut = () => {
//   localStorage.removeItem('accessToken');
//   localStorage.removeItem('refreshToken');
// };

// export default apiClient;




import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'http://localhost:3000', 
baseURL: '/auth',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});


apiClient.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 설정
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        try {
          
          const response = await axios.post('/auth/token/access', null, {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          });

          
          const { accessToken, refreshToken: newRefreshToken } = response.data;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', newRefreshToken);

         
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return apiClient(originalRequest);
        } catch (refreshError) {
          console.error('토큰 갱신 실패:', refreshError);
         
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login';
        }
      } else {
       
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// 회원가입 요청 함수
export const signUp = async ({ email, password, passwordCheck }) => {
  try {
    const response = await apiClient.post('/auth/register', { email, password, passwordCheck });
    return response.data;
  } catch (error) {
    alert('회원가입 실패: ' + (error.response?.data?.message || '알 수 없는 오류가 발생했습니다.'));
    throw error;
  }
};

// 로그인 요청 함수
export const signIn = async ({ email, password }) => {
  try {
    const response = await apiClient.post('/auth/login', { email, password });
    const { accessToken, refreshToken } = response.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    return response.data;
  } catch (error) {
    alert('로그인 실패: ' + (error.response?.data?.message || '알 수 없는 오류가 발생했습니다.'));
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await apiClient.get('/user/me');
    return response.data;
  } catch (error) {
    alert('유저 정보를 불러오는 데 실패했습니다.');
    throw error;
  }
};

export const signOut = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export default apiClient;