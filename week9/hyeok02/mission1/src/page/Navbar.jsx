import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart); // Redux 상태에서 totalQuantity 가져오기

  return (
    <NavBarContainer>
      <Title>UMC PlayList</Title>
      <CartContainer>
        <CartIcon>🛒</CartIcon>
        <CartCount>{totalQuantity}</CartCount>
      </CartContainer>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #6c63ff;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const CartIcon = styled.span`
  font-size: 24px;
  margin-right: 8px;
`;

const CartCount = styled.span`
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  color: #6c63ff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Navbar;
