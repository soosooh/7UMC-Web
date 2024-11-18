import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:3000/todo",
    headers: {
        "Content-Type": "application/json",
    },
});