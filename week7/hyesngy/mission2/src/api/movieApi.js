import axios from "axios";

const movieApi = axios.create({
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
    baseURL:import.meta.env.VITE_MOVIE_API_URL,
})

export {movieApi}