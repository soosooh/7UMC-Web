import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserInfo, logout } from '../apis/authService';

const Navbar__container = styled.div`
  background-color: rgb(20, 20, 20);
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar__icon = styled.div`
  color: #ff4d4d;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 20px;
`;

const Navbar__button = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    flex-wrap: nowrap;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* 닉네임과 로그아웃 버튼 간격 */
`;

const LogInButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
  padding: 5px;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */

  &:hover {
    color: darkgray;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 4px;
  }
`;

const LogOutButton = styled.button`
  background-color: #ff4d4d;
  border-radius: 5px;
  color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
  padding: 5px;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 4px;
  }
`;

const SignUpButton = styled(LogInButton)`
  background-color: #ff4d4d;
  border-radius: 5px;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 4px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* 링크 밑줄 없애기 */
`;

const Navbar = () => {
  const [nickname, setNickname] = useState(() => {
    return localStorage.getItem('nickname');
  });
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트 마운트 시 localStorage의 nickname 감시
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, []);

  const handleLogin = () => {
    navigate('/LogIn/auth');
  };

  const handleLogout = () => {
    const kakaoToken = localStorage.getItem('kakaoToken');
    if (kakaoToken) {
      const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_TOKEN;
      const logoutRedirectURI = 'http://localhost:5173/LogIn/auth';
      const kakaoLogoutURL = `https://kauth.kakao.com/oauth/logout?client_id=${KAKAO_REST_API_KEY}&logout_redirect_uri=${logoutRedirectURI}`;

      localStorage.removeItem('kakaoToken');
      localStorage.removeItem('nickname');
      setNickname(null);

      // 카카오 로그아웃 리다이렉션
      window.location.href = kakaoLogoutURL;
    } else {
      localStorage.removeItem('nickname');
      setNickname(null);
      navigate('/LogIn');
    }
  };

  return (
    <Navbar__container>
      <Navbar__icon>YONGCHA</Navbar__icon>
      <Navbar__button>
        {nickname ? (
          <UserContainer>
            <span>{nickname}님 반갑습니다</span>
            <LogOutButton onClick={handleLogout}>로그아웃</LogOutButton>
          </UserContainer>
        ) : (
          <>
            <StyledLink to="/LogIn">
              <LogInButton onClick={handleLogin}>로그인</LogInButton>
            </StyledLink>
            <StyledLink to="/SignUp">
              <SignUpButton>회원가입</SignUpButton>
            </StyledLink>
          </>
        )}
      </Navbar__button>
    </Navbar__container>
  );
};

export default Navbar;
