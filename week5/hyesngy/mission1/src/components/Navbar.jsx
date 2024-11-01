import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo to="/">HaenCHA</Logo>
            <UserContainer>
                <LoginButton to="/login">로그인</LoginButton>
                <SignUpButton to="signup">회원가입</SignUpButton>
            </UserContainer>
        </NavbarContainer>
    );
};

export default Navbar;