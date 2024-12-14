import axios from "axios";
import getUser from "./getUser";
import { getRedirectURI } from "./redirectURI";

const kakaoRestAPI = import.meta.env.VITE_KAKAO_TOKEN;
const redirectURI = getRedirectURI();

export const getKakaoLoginURL = () => {
	return `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestAPI}&redirect_uri=${redirectURI}&response_type=code`;
};

const makeFormData = (params) => {
	const searchParams = new URLSearchParams();
	for (const key of Object.keys(params)) {
		searchParams.append(key, params[key]);
	}
	return searchParams;
};

export const getKakaoToken = async (code) => {
	try {
		const response = await axios({
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
			},
			url: "https://kauth.kakao.com/oauth/token",
			data: makeFormData({
				grant_type: "authorization_code",
				client_id: kakaoRestAPI,
				redirect_uri: redirectURI,
				code,
			}),
		});

		const accessToken = response.data.access_token;
		if (accessToken) {
			localStorage.setItem("isKakaoLogin", true);
			localStorage.setItem("accessToken", accessToken);
			await getUser(accessToken);
			return true;
		}
		return false;
	} catch (err) {
		console.log("Error: ", err);
		return false;
	}
};
