import axios from 'axios';

// Axios 인스턴스 생성
const apiClient = axios.create({
//   baseURL: 'http://localhost:3000', // 기본 URL 설정
baseURL: '/auth',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 쿠키를 통한 인증 지원
});

// 요청 인터셉터 설정
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

    // 401 에러가 발생했을 때
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        try {
          // POST 요청을 통해 토큰 갱신
          const response = await axios.post('/auth/token/access', null, {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          });

          // 갱신된 accessToken 및 refreshToken 저장
          const { accessToken, refreshToken: newRefreshToken } = response.data;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', newRefreshToken);

          // 원래 요청을 갱신된 accessToken으로 재시도
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return apiClient(originalRequest);
        } catch (refreshError) {
          console.error('토큰 갱신 실패:', refreshError);
          // 토큰 재발급 실패 시 로컬 스토리지에서 토큰 삭제 및 로그인 페이지로 리다이렉트
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login';
        }
      } else {
        // refreshToken이 없는 경우 바로 로그인 페이지로 리다이렉트
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// 회원가입 요청 함수
export const signUp = async ({ email, password, passwordCheck }) => {
  try {
    const response = await apiClient.post('/register', { email, password, passwordCheck });
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

// 유저 정보 불러오기 함수
export const getUserInfo = async () => {
  try {
    const response = await apiClient.get('/user/me');
    return response.data;
  } catch (error) {
    alert('유저 정보를 불러오는 데 실패했습니다.');
    throw error;
  }
};

// 로그아웃 처리 함수
export const signOut = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export default apiClient;


// import axios from "axios";

// // 기본 API 설정
// const apiClient = axios.create({
//   baseURL: "http://localhost:3000",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
// });

// // Request Interceptor
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response Interceptor
// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // 네트워크 오류 처리
//     if (error.message === "Network Error" || error.code === "ERR_CONNECTION_REFUSED") {
//       alert("서버에 연결할 수 없습니다. 관리자에게 문의하세요.");
//       return Promise.reject(error);
//     }

//     const refreshToken = localStorage.getItem("refreshToken");

//     // 토큰 갱신 처리 (401 Unauthorized)
//     if (error.response?.status === 401 && refreshToken && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const response = await apiClient.post(
//           "/auth/token/access",
//           {},
//           {
//             headers: { Authorization: `Bearer ${refreshToken}` },
//           }
//         );
//         const { accessToken } = response.data;
//         localStorage.setItem("accessToken", accessToken);
//         originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//         return apiClient(originalRequest);
//       } catch (refreshError) {
//         console.error("토큰 갱신 실패:", refreshError);
//         alert("로그인이 만료되었습니다. 다시 로그인 해주세요.");
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
//         window.location.href = "/login";
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// const authApi = {
//   // 회원가입 요청 함수
//   signup: async ({ email, password, passwordCheck }) => {
//     try {
//       const response = await apiClient.post("/auth/register", {
//         email,
//         password,
//         passwordCheck,
//       });
//       return response.data;
//     } catch (error) {
//       console.error("회원가입 오류:", error.response?.data || error);
//       alert("회원가입에 실패했습니다. 네트워크 상태를 확인하세요.");
//       throw error;
//     }
//   },

//   // 로그인 요청 함수
//   login: async ({ email, password }) => {
//     try {
//       const response = await apiClient.post("/auth/login", {
//         email,
//         password,
//       });
//       const { accessToken, refreshToken } = response.data;
//       localStorage.setItem("accessToken", accessToken);
//       localStorage.setItem("refreshToken", refreshToken);
//       return response.data;
//     } catch (error) {
//       console.error("로그인 오류:", error.response?.data || error);
//       alert("로그인에 실패했습니다. 관리자에게 문의하세요.");
//       throw error;
//     }
//   },

//   // 유저 정보 불러오기 함수
//   getUserInfo: async () => {
//     try {
//       const response = await apiClient.get("/user/me");
//       return response.data;
//     } catch (error) {
//       console.error("유저 정보 불러오기 오류:", error.response?.data || error);
//       alert("유저 정보를 불러오는 데 실패했습니다.");
//       throw error;
//     }
//   },

//   // 로그아웃 처리 함수
//   signOut: () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//   },
// };

// export default authApi;
// export { apiClient };


// import axios from "axios";

// // 기본 API 설정
// const apiClient = axios.create({
//     baseURL: "http://localhost:3000", 
//     headers: {
//         "Content-Type": "application/json",
//     },
//     withCredentials: true,
// });

// // 요청 시 토큰 자동 포함 설정
// apiClient.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('accessToken');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (err) => Promise.reject(err)
// );

// // 토큰 만료 시 자동 갱신 처리
// apiClient.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalConfig = error.config;
//         const refreshToken = localStorage.getItem('refreshToken');

//         if (error.message === "Network Error" || error.code === 'ERR_CONNECTION_REFUSED') {
//             alert("서버에 연결할 수 없습니다. 관리자에게 문의하세요.");
//             return Promise.reject(error);
//         }

//         // 401 오류 처리: 토큰 갱신
//         if (error.response?.status === 401 && refreshToken && !originalConfig._retry) {
//             originalConfig._retry = true;
//             try {
//                 const { data } = await apiClient.post("/auth/token/access", null, {
//                     headers: { Authorization: `Bearer ${refreshToken}` },
//                 });
//                 localStorage.setItem('accessToken', data.accessToken);
//                 originalConfig.headers.Authorization = `Bearer ${data.accessToken}`;
//                 return apiClient(originalConfig); // 다시 원래 요청 실행
//             } catch (refreshError) {
//                 console.error('Failed to refresh token:', refreshError);
//                 return Promise.reject(refreshError);
//             }
//         }
//         return Promise.reject(error);
//     }
// );

// // 회원가입 요청 함수
// export const signUp = async ({ email, password, passwordCheck }) => {
//     try {
//         const response = await apiClient.post("/auth/register", { email, password, passwordCheck });
//         return response.data;
//     } catch (error) {
//         if (error.response) {
//             alert("회원가입 실패: " + (error.response.data.message || "알 수 없는 오류가 발생했습니다."));
//         } else {
//             alert("회원가입 요청에 실패했습니다. 네트워크 연결을 확인해주세요.");
//         }
//         throw error;
//     }
// };

// // 로그인 요청 함수
// export const signIn = async ({ email, password }) => {
//     try {
//         const { data } = await apiClient.post("/auth/login", { email, password });
//         localStorage.setItem('accessToken', data.accessToken);
//         localStorage.setItem('refreshToken', data.refreshToken);
//         return data;
//     } catch (error) {
//         alert("로그인에 실패했습니다. 네트워크 연결을 확인하거나 관리자에게 문의하세요.");
//         throw error;
//     }
// };

// // 로그아웃 처리 함수
// export const signOut = () => {
//     ['accessToken', 'refreshToken'].forEach((item) => localStorage.removeItem(item));
// };

// // 유저 정보 불러오기 함수
// export const getUserInfo = async () => {
//     try {
//         const response = await apiClient.get("/user/me");
//         return response.data;
//     } catch (error) {
//         alert("유저 정보를 불러오는 데 실패했습니다.");
//         throw error;
//     }
// };

// export default apiClient;
