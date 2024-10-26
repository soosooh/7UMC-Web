import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch, FaFilm } from 'react-icons/fa';

const SideBarContainer = styled.div`
  width: 200px;
  background-color: #413f3f;
  height: 100%;  // 100vh 대신 100%
  padding: 20px;
  color: white;
  flex-shrink: 0;  // 사이드바 크기 고정
`;

const SideBarItem = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 16px;
`;

const IconWrapper = styled.span`
  margin-right: 10px;
`;

const SideBar = () => {  
  return (
    <SideBarContainer>
      <SideBarItem to="/search">
        <IconWrapper><FaSearch /></IconWrapper>
        찾기
      </SideBarItem>
      <SideBarItem to="/movies">
        <IconWrapper><FaFilm /></IconWrapper>
        영화
      </SideBarItem>
    </SideBarContainer>
  );
};

export default SideBar;  