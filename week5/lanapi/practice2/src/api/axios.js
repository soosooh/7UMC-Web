// import axios from 'axios';

// const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

// const API = axios.create({
//     baseURL: 'https://api.themoviedb.org/3/movie/',
//     params: { language: 'ko' },
//     headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${accessToken}`,
//     },
// });

// export default API;

// src/api/axios.js
import axios from 'axios';

// .env 파일에서 API 키와 읽기 액세스 토큰 불러오기
const apiKey = import.meta.env.VITE_API_KEY;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

console.log(`API Key: ${apiKey}`); // 콘솔에서 API 키 확인
console.log(`Access Token: ${accessToken}`); // 콘솔에서 액세스 토큰 확인

const API = axios.create({
    baseURL: 'https://api.themoviedb.org/3/', // 기본 URL 설정
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`, // 읽기 액세스 토큰 추가
    },
    params: {
        api_key: apiKey, // API 키 추가
        language: 'ko',  // 기본 언어 설정
    },
});

export default API;
