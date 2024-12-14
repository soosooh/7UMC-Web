import axios from "axios";

const authApi = async (data, endpoint) => {
	try {
		const response = await axios.post(
			`${import.meta.env.VITE_API_URL}/auth/${endpoint}`,
			data,
		);
		return response.data;
	} catch (error) {
		console.error(error.message);
		throw error;
	}
};

export default authApi;
