import React from 'react';
import styled from 'styled-components';
import { FaBasketShopping } from "react-icons/fa6";
import useStore from '../store/useStore';

const Navbar = () => {
  const amount = useStore((state) => state.cart.amount);

  return (
    <NavbarDiv>
      <TitleP>UMC Playlist</TitleP>
      <CartDiv>
        <FaBasketShopping size={24} />
        <Amount>{amount}</Amount>
      </CartDiv>
    </NavbarDiv>
  );
};

export default Navbar;

const NavbarDiv = styled.div`
  width: 100%;
  height: 60px;
  background: #6D6FFF;
  position: fixed;
  top: 0;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15rem;
`
const TitleP = styled.p`
  font-weight: 700;
  font-size: 24px;
`
const Amount = styled.p`
  position: absolute;
  top: -3px;
  right: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6D6FFF;
  background-color: rgba(255,255,255,0.6);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
`
const CartDiv = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items:center;
  justify-content: center;
`
