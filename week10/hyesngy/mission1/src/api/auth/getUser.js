import axios from "axios";

const getUser = async () => {
	const accessToken = localStorage.getItem("accessToken");
	const isKakaoLogin = localStorage.getItem("isKakaoLogin");

	try {
		let response;
		let nickname;

		if (isKakaoLogin) {
			response = await axios.get("https://kapi.kakao.com/v2/user/me", {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			nickname = response.data.kakao_account.profile.nickname;
			localStorage.setItem("nickname", nickname);
		} else {
			response = await axios.get(`${import.meta.env.VITE_API_URL}/user/me`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			nickname = response.data.email.split("@")[0];
			localStorage.setItem("nickname", nickname);
		}
		return response.data;
	} catch (err) {
		console.log("Error:", err);
		throw err;
	}
};

export default getUser;
