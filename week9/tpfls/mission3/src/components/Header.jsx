import React from 'react';
import styled from 'styled-components';
import useStore from '../store';

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

const CartIcon = styled.div`
  position: relative;
  font-size: 24px;
  cursor: pointer;

  span {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 12px;
  }
`;

export default function Header() {
  const totalQuantity = useStore((state) => state.totalQuantity);

  return (
    <HeaderContainer>
      <Logo>UMC Playlist</Logo>
      <CartIcon>
        🛒
        {totalQuantity > 0 && <span>{totalQuantity}</span>}
      </CartIcon>
    </HeaderContainer>
  );
}
