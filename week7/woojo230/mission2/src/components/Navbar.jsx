import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserInfo, logout } from "../apis/authService";

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
  font-size: 30px;
  padding: 20px;
`;

const Navbar__button = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  align-items: center;
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
  &:hover {
    color: darkgray;
  }
`;

const LogOutButton = styled.button`
  background-color: #ff4d4d;
  border-radius: 5px;
  color: white;
  border: 4px;
  font-size: 15px;
  cursor: pointer;
  padding: 5px;
  &:hover {
    color: darkgray;
  }
`;

const SignUpButton = styled(LogInButton)`
  background-color: #ff4d4d;
  border-radius: 5px;
`;

const Navbar = () => {
  const [nickname, setNickname] = useState(null); // 닉네임 상태 추가
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getUserInfo();
      if (userInfo) {
        const nicknameFromEmail = userInfo.email.split("@")[0]; // 이메일에서 @ 앞부분을 추출
        setNickname(nicknameFromEmail);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = () => {
    logout();
    setNickname(null);
    navigate("/LogIn");
  };

  return (
    <Navbar__container>
      <Navbar__icon>YONGCHA</Navbar__icon>
      <Navbar__button>
        {nickname ? (
          <UserContainer>
            <span style={{ color: "white" }}>{nickname}님 반갑습니다</span>
            <LogOutButton onClick={handleLogout}>로그아웃</LogOutButton>
          </UserContainer>
        ) : (
          <>
            <Link to="/LogIn">
              <LogInButton>로그인</LogInButton>
            </Link>
            <Link to="/SignUp">
              <SignUpButton>회원가입</SignUpButton>
            </Link>
          </>
        )}
      </Navbar__button>
    </Navbar__container>
  );
};

export default Navbar;
