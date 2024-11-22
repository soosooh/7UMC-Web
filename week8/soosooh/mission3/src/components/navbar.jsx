import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const NavContainer = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  background-color: #413f3f;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
const Logo = styled.div`
  margin-left: 50px;
  a {
    color: #ff073d;
    font-size: 20px;
  }
`;
const StyledText = styled.text`
  margin-right: 10px;
  font-weight: bold;
`;
const LogIn = styled.div`
  margin-right: 20px;
  a {
    color: white;
    &:hover {
      color: gray;
    }
  }
`;
const LogOut = styled.div`
  background-color: #ff073d;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  a {
    color: white;
    &:hover {
      color: gray;
    }
  }
`;
const SignUp = styled.div`
  background-color: #ff073d;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  a {
    color: white;
    &:hover {
      color: gray;
    }
  }
`;

const Navbar = () => {
  const { isLoggedIn, userName, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <NavContainer>
      <Logo>
        <Link to={"/"}>YONGCHA</Link>
      </Logo>
      <LinkContainer>
        {isLoggedIn ? (
          <>
            <StyledText>{userName}님 반갑습니다.</StyledText>
            <LogOut onClick={handleLogout}>로그아웃</LogOut>
          </>
        ) : (
          <>
            <LogIn>
              <Link to={"/login"}>로그인</Link>
            </LogIn>
            <SignUp>
              <Link to={"/signup"}>회원가입</Link>
            </SignUp>
          </>
        )}
      </LinkContainer>
    </NavContainer>
  );
};

export default Navbar;
