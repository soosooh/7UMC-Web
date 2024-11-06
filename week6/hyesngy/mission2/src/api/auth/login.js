import axios from 'axios';

const login = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, data);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export default login;