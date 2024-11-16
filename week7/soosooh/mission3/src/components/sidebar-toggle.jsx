import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./sidebar";

const ToggleButton = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 1000;
  color: white;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 180px;
  background-color: #413f3f;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 999;

  @media screen and (min-width: 768px) {
    transform: translateX(0);
    position: static;
  }
`;

const SidebarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </ToggleButton>
      <SidebarContainer open={isOpen}>
        <Sidebar />
      </SidebarContainer>
    </>
  );
};

export default SidebarToggle;
