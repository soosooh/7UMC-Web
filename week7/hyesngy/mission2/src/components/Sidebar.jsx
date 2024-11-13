import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { MdMovie } from "react-icons/md";

const SidebarContainer = styled.div`
  width: 180px;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  background-color: #141517;
  padding: 1.5rem 1rem;
  gap: 1rem;
  flex-shrink: 0;
  position: fixed;
  left: 0;
`

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const MenuName = styled(Link)`
  color: white;
  text-decoration: none;
`

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <IoSearch />
        <MenuName to="/search">찾기</MenuName>
      </SidebarItem>
      <SidebarItem>
        <MdMovie />
        <MenuName to="/movies">영화</MenuName>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;