import { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";
import { API } from "../../api/authAxios";
import { useQuery } from "@tanstack/react-query";

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
    // useQuery 변경
    const { data: nickname, error } = useQuery({
        queryKey: ["nickname"],
        queryFn: async () => {
            const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
            if (isLoggedIn) {
                const response = await API.get("/user/me");
                const email = response.data.email;
                return email.split("@")[0];
            }
            return null;
        },
    });
    

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.setItem("isLoggedIn", "false");
        alert("로그아웃이 완료되었습니다.");
        window.location.reload();
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
                        <NavP
                            style={{ color: colors.white, fontSize: "1rem" }}
                            onClick={handleLogout}
                        >
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
