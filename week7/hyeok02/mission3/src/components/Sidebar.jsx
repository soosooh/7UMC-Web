import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";

const Container = styled.div`
  width: 180px;
  min-height: calc(100vh - 5rem);
  background-color: #141517;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-shrink: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
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
