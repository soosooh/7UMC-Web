import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import getRedirectURI from "../../apis/redirectURI";

const KakaoRedirectHandler = () => {
    const navigate = useNavigate();
    const kakaoRestAPI = import.meta.env.VITE_KAKAO_TOKEN;
    const redirect_uri = getRedirectURI();


        // axios
        // .post("https://kauth.kakao.com/oauth/token", { code }, {
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //     },
        // })
        // .then((response) => {
        //     const { accessToken, refreshToken } = response.data;
        //     localStorage.setItem("accessToken", accessToken);
        //     localStorage.setItem("refreshToken", refreshToken);

        //     console.log("토큰 저장 성공:", response.data);
        //     navigate("/"); // 홈으로 이동
        // })
        // .catch((error) => {
        //     console.error("토큰 발급 실패:", error);
        //     alert("로그인 중 문제가 발생했습니다. 다시 시도해주세요.");
        //     navigate("/login");
        // });

    // const getToken = async () =>{
    //     const code = new URL(window.location.href).searchParams.get("code");
    //     if (!code) {
    //         console.error("인가 코드가 없습니다.");
    //         return null;
    //     }

    //     console.log("인가 코드:", code); // 디버깅용

    //     const res = axios.post(
    //         "https://kauth.kakao.com/oauth/token",
    //         new URLSearchParams({
    //             grant_type: "authorization_code",
    //             client_id: kakaoRestAPI,
    //             redirect_uri: redirect_uri,
    //             code: token,
    //         }),
    //         {
    //             headers: {
    //             "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //             },
    //         }
    //     );
    //     return res;
    // };

    useEffect(() => {
        const fetchData = async () => {
            const code = new URL(window.location.href).searchParams.get("code");
        if (!code) {
            console.error("인가 코드가 없습니다.");
            return null;
        }

        try{
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

                if (accessToken && refreshToken) {
                    // 로컬 스토리지에 토큰 저장
                    localStorage.setItem("accessToken", accessToken);
                    localStorage.setItem("refreshToken", refreshToken);
                    console.log("토큰 저장 성공:", response.data);
                } else {
                    console.error("토큰이 응답 데이터에 없습니다.");
                }

            // 로그인 성공 후 홈으로 이동
            navigate("/");
            }catch (error) {
                console.error("토큰 발급 실패:", error.response?.data || error.message);
                alert("로그인 중 문제가 발생했습니다. 다시 시도해주세요.");
                navigate("/login");
            }

        }
        fetchData();
        
    }, [navigate,kakaoRestAPI, redirect_uri]); // 종속성 배열에 필요한 값 추가]);


    return <div>로그인 처리 중...</div>;
};

export default KakaoRedirectHandler;