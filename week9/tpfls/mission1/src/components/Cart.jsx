import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { clearCart, calculateTotals } from '../features/cart/cartSlice';
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
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <CartContainer>
      <h1>당신이 선택한 음반</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <TotalContainer>
        <h3>총 가격: ₩ {totalAmount}</h3>
        <Button onClick={() => dispatch(clearCart())}>장바구니 초기화</Button>
      </TotalContainer>
    </CartContainer>
  );
}
