import axios from 'axios';

export const BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, 
});

export default api;
