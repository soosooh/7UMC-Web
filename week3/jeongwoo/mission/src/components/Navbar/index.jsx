import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #413f3f;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #e50914;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const AuthButton = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: #141414;
  }
`;

const SignUpButton = styled(AuthButton)`
  background-color: #e50914;
  
  &:hover {
    background-color: #f40612;
    color: white;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">YONGCHA</Logo>
      <AuthButtons>
        <AuthButton to="/login">로그인</AuthButton>
        <SignUpButton to="/signup">회원가입</SignUpButton>
      </AuthButtons>
    </Nav>
  );
};

export default Navbar;