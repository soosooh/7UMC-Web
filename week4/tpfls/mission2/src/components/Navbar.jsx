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
      <Logo onClick={() => navigate('/')}>YONGCHA</Logo> {/* 로고 클릭 시 기본 경로로 이동 */}
      <Hamburger onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </Hamburger>
      <ButtonContainer isOpen={isOpen}>
        <LoginButton onClick={() => { navigate('/login'); setIsOpen(false); }}>로그인</LoginButton>
        <SignUpButton onClick={() => { navigate('/signup'); setIsOpen(false); }}>회원가입</SignUpButton>
      </ButtonContainer>
    </NavBarContainer>
  );
};

// Styled Components
const NavBarContainer = styled.nav`
  width: 100%;  
  height: 60px;  
  background: #413F3F;
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
  color: #FF073D;
  cursor: pointer; /* 클릭할 수 있는 요소임을 나타냄 */
  font-size: 24px;
  font-family: 'Inter', sans-serif; /* Inter 폰트 설정 */
  transition: color 0.3s; /* 부드러운 색상 전환 효과 */
`;

const Hamburger = styled.div`
  display: none; /* 기본적으로 숨김 */
  flex-direction: column;
  cursor: pointer;
  
  div {
    width: 25px;
    height: 3px;
    background-color: #FF073D;
    margin: 5px;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    display: flex; /* 화면이 작아지면 햄버거 메뉴 표시 */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* 햄버거 메뉴가 열리면 표시 */
    flex-direction: column;
    position: absolute;
    top: 60px; /* 내비게이션 바 아래에 위치 */
    left: 0;
    width: 100%;
    
    background: #413F3F;
    padding: 10px 0;
  }
`;

const LoginButton = styled.button`
  background-color: #413F3F; /* 내비게이션 바 배경색과 동일 */
  color: white; /* 흰색 글자 */
  padding: 8px 16px; /* 패딩 설정 */
  cursor: pointer;
  font-family: 'Inter', sans-serif; /* Inter 폰트 설정 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 둥근 모서리 */
  transition: background-color 0.3s, color 0.3s; /* 부드러운 전환 효과 */

  &:hover {
    background-color: #888; /* hover 시 배경색을 그레이로 변경 */
    color: white; /* hover 시 글자색 유지 */
  }
`;

const SignUpButton = styled.button`
  background-color: #FF073D; /* 지정된 배경색 */
  color: white; /* 흰색 글자 */
  border: none; /* 테두리 제거 */
  border-radius: 10px; /* 둥근 모서리 */
  padding: 8px 20px; /* 패딩 조정 */
  cursor: pointer;
  font-family: 'Inter', sans-serif; /* Inter 폰트 설정 */
  transition: background-color 0.3s, transform 0.3s; /* 부드러운 전환 효과 */

  &:hover {
    background-color: #888; /* hover 시 배경색을 그레이로 변경 */
    transform: scale(1.05); /* hover 시 약간 커지도록 */
  }
`;

export default Navbar;
