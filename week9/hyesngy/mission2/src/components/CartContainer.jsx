import React from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import AlbumItem from './AlbumItem';
import CartFooter from './CartFooter';

const CartContainer = () => {
  const { cartItems } = useSelector((store) => store.cart);
  console.log(cartItems);
  return (
    <Container>
      <TitleP>당신이 선택한 음반</TitleP>
      <ListContainer>
        {cartItems.map((item) => (
          <AlbumItem props={item} key={item.id} />
        ))}
      </ListContainer>
      <CartFooter />
    </Container>
  );
};

export default CartContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`
const TitleP = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 5rem;
`
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1.5rem; 
`
