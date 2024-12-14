import { useState, useEffect } from "react";
import { getKakaoToken } from "../api/auth/kakaoAuth";

export const useKakaoLogin = () => {
	const [code, setCode] = useState(null);

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get("code");
		if (code) {
			setCode(code);
		}
	}, []);

	useEffect(() => {
		const handleToken = async () => {
			if (code) {
				const success = await getKakaoToken(code);
				if (success) {
					window.location.href = "/";
				}
			}
		};
		handleToken();
	}, [code]);

	return { code };
};
