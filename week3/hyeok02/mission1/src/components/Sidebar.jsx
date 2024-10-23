import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";

const Container = styled.div`
  width: 175px; 
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 0.9rem; 
  padding: 1.25rem 0.9rem; 
  background-color: #131416; 
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem; 
`;

const MenuLink = styled(Link)`
  font-size: 0.95rem; 
  color: #f5f5f5; 
  text-decoration: none;
`;

const Sidebar = () => {
  return (
    <Container>
      <Menu>
        <FaSearch /><MenuLink to="/search">찾기</MenuLink>
      </Menu>
      <Menu>
        <BiSolidMoviePlay /><MenuLink to="/movies">영화</MenuLink>
      </Menu>
    </Container>
  );
};

export default Sidebar;
