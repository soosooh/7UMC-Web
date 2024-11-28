import React, { useEffect } from 'react';
import styled from 'styled-components';
import useStore from '../store';
import CartItem from './CartItem';

const CartContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
`;

const Button = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Cart() {
  const { cartItems, totalAmount, calculateTotals, openModal } = useStore();

  useEffect(() => {
    calculateTotals();
  }, [cartItems, calculateTotals]);

  return (
    <CartContainer>
      <h1>당신이 선택한 음반</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <h2>장바구니가 비어 있습니다.</h2>
      )}
      <TotalContainer>
        <h3>총 가격: ₩ {totalAmount}</h3>
        <Button onClick={openModal}>장바구니 초기화</Button>
      </TotalContainer>
    </CartContainer>
  );
}
