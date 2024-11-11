import axios from "axios";

const acessToken = import.meta.env.VITE_ACCESS_TOKEN;

export const API = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {language: 'ko'},
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${acessToken}`
    }
});