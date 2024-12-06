import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";
import { API } from "../../api/authAxios";
import { useQuery } from "@tanstack/react-query";
import { getRedirectURI } from "../../api/redirectURI";

const NavBarContainer = styled.div`
    width: 100vw;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.navBackground};
`;

const NavP = styled(Link)`
    color: ${colors.main};
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: ${colors.black};
    }
`;

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`;

const SignButton = styled(Link)`
    padding: 0.5rem;
    color: ${colors.white};
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 0.5vw;
    cursor: pointer;

    &:hover {
        color: ${colors.black};
    }
`;

const SignButton2 = styled(SignButton)`
    background-color: ${colors.signBackground};
`;

const NavBar = () => {
    const [nickname, setNickname] = useState(null);

    const { data: fetchedNickname, error } = useQuery({
        queryKey: ["nickname"],
        queryFn: async () => {
            const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
            const accessToken = localStorage.getItem("token");

            if (isLoggedIn && accessToken) {
                const response = await API.get("/user/me");
                const email = response.data.email;
                return email.split("@")[0];
            }
            return null;
        },
        onSuccess: (data) => {
            if (data) setNickname(data);
        },
    });


    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        const storedNickname = localStorage.getItem("username");

        if (isLoggedIn && storedNickname) {
            setNickname(storedNickname);
        }
    }, []);

    const handleLogout = async () => {
        const client_id = import.meta.env.VITE_KAKAO_TOKEN;
        const logout_redirect_uri = getRedirectURI();
        const kakaoLogoutURL = `https://kauth.kakao.com/oauth/logout?client_id=${client_id}&logout_redirect_uri=${logout_redirect_uri}`;

        try {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("username");
            localStorage.setItem("isLoggedIn", "false");
            setNickname(null);
            alert("로그아웃이 완료되었습니다.");
            window.location.href = kakaoLogoutURL;
        } catch (error) {
            console.error("로그아웃 오류: ", error);
        }
    };

    if (error) {
        console.error("닉네임 로딩 오류: ", error);
    }

    return (
        <NavBarContainer>
            <NavP to="/">YONGCHA</NavP>
            <RightContainer>
                {nickname ? (
                    <>
                        <NavP style={{ color: colors.white, fontSize: "1rem" }}>
                            {nickname}님 반갑습니다.
                        </NavP>
                        <NavP style={{ color: colors.white, fontSize: "1rem" }} onClick={handleLogout}>
                            로그아웃
                        </NavP>
                    </>
                ) : (
                    <>
                        <SignButton to="/login">로그인</SignButton>
                        <SignButton2 to="/signup">회원가입</SignButton2>
                    </>
                )}
            </RightContainer>
        </NavBarContainer>
    );
};

export default NavBar;
