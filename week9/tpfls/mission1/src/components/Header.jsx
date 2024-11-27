import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// 스타일 정의
const HeaderContainer = styled.div`
  background-color: #6a5acd;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const CartIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const Badge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 12px;
`;

export default function Header() {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <HeaderContainer>
      <Logo>UMC Playlist</Logo>
      <CartContainer>
        <IconContainer>
          <CartIcon>🛒</CartIcon>
          {totalQuantity > 0 && <Badge>{totalQuantity}</Badge>}
        </IconContainer>
      </CartContainer>
    </HeaderContainer>
  );
}
