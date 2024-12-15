import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import getRedirectURI from "../../apis/redirectURI";
import { useAuth } from "../../contexts/LoginContext";

const KakaoRedirectHandler = () => {
    const navigate = useNavigate();
    const kakaoRestAPI = import.meta.env.VITE_KAKAO_TOKEN;
    const redirect_uri = getRedirectURI();
    const [isFetching, setIsFetching] = useState(false); // 중복 호출 방지 플래그
    const { login } = useAuth();


    useEffect(() => {
        const fetchData = async () => {
            if (isFetching) return; // 이미 요청 중이면 중단
            setIsFetching(true); // 요청 시작

            const code = new URL(window.location.href).searchParams.get("code");
            if (!code) {
                console.error("인가 코드가 없습니다.");
                return null;
            }

            try {
                const response = await axios.post(
                    "https://kauth.kakao.com/oauth/token",
                    new URLSearchParams({
                        grant_type: "authorization_code",
                        client_id: kakaoRestAPI,
                        redirect_uri: redirect_uri,
                        code: code,
                    }),
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                        },
                    }
                );

                console.log("응답 데이터:", response.data); // 응답 데이터를 확인

                const accessToken = response.data.access_token;
                const refreshToken = response.data.refresh_token;
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);

                // axiosInstance의 기본 헤더 갱신
            //axiosInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;

                // if (accessToken && refreshToken) {
                //     // 로컬 스토리지에 토큰 저장
                //     localStorage.setItem("accessToken", accessToken);
                //     localStorage.setItem("refreshToken", refreshToken);
                //     console.log("토큰 저장 성공:", response.data);
                // } else {
                //     console.error("토큰이 응답 데이터에 없습니다.");
                // }
                
                // 3. 사용자 정보 요청
                const userResponse = await axios.get("https://kapi.kakao.com/v2/user/me", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    },
                });

                console.log("사용자 정보:", userResponse.data);

                // 4. 닉네임 저장
                const nickname = userResponse.data.properties.nickname;
                login(nickname);

                //로그아웃 구현 
                const userLogin = await axios.get(
                    `https://kauth.kakao.com/oauth/logout?client_id=${kakaoRestAPI}&logout_redirect_uri=${redirect_uri}`
                );




                // 로그인 성공 후 홈으로 이동
                navigate("/");
            } catch (error) {
                console.error("토큰 발급 실패:", error.response?.data || error.message);
                // alert("로그인 중 문제가 발생했습니다. 다시 시도해주세요.");
                // navigate("/login");
            }

        }
        fetchData();

    }, [navigate, kakaoRestAPI, redirect_uri, login]); // 종속성 배열에 필요한 값 추가]);


    return <div>로그인 처리 중...</div>;
};

export default KakaoRedirectHandler;
