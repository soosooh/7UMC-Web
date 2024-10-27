import axios from 'axios';

const axiosInstance = axios.create({
    headers:{
        Authorization : `Bearer ${import.meta.env.VITE_TMBD_TOKKEN}`,
    },
    baseURL: import.meta.env.VITE_MOVIE_API_URL,
})

export {axiosInstance}