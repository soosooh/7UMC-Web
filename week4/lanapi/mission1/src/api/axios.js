import axios from 'axios';

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

const API = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
    params: { language: 'ko' },
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
    },
});

export default API;

