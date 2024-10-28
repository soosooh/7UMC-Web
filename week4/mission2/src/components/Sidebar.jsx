import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaFilm } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <SearchButton onClick={() => navigate('/search')}>
        <FaSearch size={20} />
        <span>찾기</span>
      </SearchButton>
      <MoviesButton onClick={() => navigate('/categories')}>
        <FaFilm size={20} />
        <span>영화</span>
      </MoviesButton>
    </SidebarContainer>
  );
};

// Styled Components
const SidebarContainer = styled.div`
  width: 180px;
  background-color: #413F3F;
  color: #FFFFFF;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
`;

const SearchButton = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  height: 120px;
  margin: 0;

  &:hover {
    color: #ff3366;
  }
`;

const MoviesButton = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  height: 50px;
  margin-top: -40px;

  &:hover {
    color: #ff3366;
  }
`;

export default Sidebar;
