import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import getUser from '../api/auth/getUser';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('accessToken');

  const fetchUserData = async () => {
    try {
      const userData = await getUser();
      const nickname = userData.email.slice(0, userData.email.indexOf('@'));
      setUser({ ...userData, nickname });
    } catch (error) {
      setUser(null);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [accessToken]);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
    navigate('/login');
  };

  return (
    <NavbarContainer>
      <Logo to="/">HaenCHA</Logo>
      <UserContainer>
        {user ? (
          <>
            <NicknameSpan>{user.nickname}님 반갑습니다.</NicknameSpan>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </>
        ) : (
          <>
            <LoginButton to="/login">로그인</LoginButton>
            <SignUpButton to="/signup">회원가입</SignUpButton>
          </>
        )}
      </UserContainer>
    </NavbarContainer>
  );
};

export default Navbar;


const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background: #141517;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`
const Logo = styled(Link)`
  display: flex;
  color: #FF073D;
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  cursor: pointer;
  text-decoration: none;
`
const UserContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`
const Button = styled(Link)`
  color: white;
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`
const LoginButton = styled(Button)`
  &:hover {
    color: #f6f6f6;
  }
`
const SignUpButton = styled(Button)`
  background: #F82F62;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background: #e52958;
  }
`
const LogoutButton = styled(Button)`
  background: #000;
  border-radius: 4px;
`
const NicknameSpan = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
  align-self: center;
`