import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;

const axiosinstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosinstance;
