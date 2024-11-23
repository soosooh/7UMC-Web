import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBarContainer>
      <Logo onClick={() => navigate('/')}>YONGCHA</Logo>
      <Hamburger onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </Hamburger>
      <ButtonContainer isOpen={isOpen}>
        <LoginButton
          onClick={() => {
            navigate('/login');
            setIsOpen(false);
          }}
        >
          로그인
        </LoginButton>
        <SignUpButton
          onClick={() => {
            navigate('/signup');
            setIsOpen(false);
          }}
        >
          회원가입
        </SignUpButton>
      </ButtonContainer>
    </NavBarContainer>
  );
};

// Styled Components
const NavBarContainer = styled.nav`
  width: 100%;
  height: 60px;
  background: #413f3f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  color: #ff073d;
  cursor: pointer;
  font-size: 24px;
  font-family: 'Inter', sans-serif;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: #ff073d;
    margin: 5px;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')}; /* $ prefix 사용 */
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #413f3f;
    padding: 10px 0;
  }
`;


const LoginButton = styled.button`
  background-color: #413f3f;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #888;
    color: white;
  }
`;

const SignUpButton = styled.button`
  background-color: #ff073d;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 20px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #888;
    transform: scale(1.05);
  }
`;

export default Navbar;
