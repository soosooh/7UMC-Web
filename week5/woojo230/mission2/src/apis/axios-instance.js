import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    accept: "application/json",
  },
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
});

export { axiosInstance };
