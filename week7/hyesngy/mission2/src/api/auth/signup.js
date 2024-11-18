import axios from 'axios';

const signup = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, data);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export default signup;