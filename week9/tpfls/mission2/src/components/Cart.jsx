import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { calculateTotals } from '../features/cart/cartSlice';
import { openModal } from '../features/modal/modalSlice';
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
      {cartItems.some((item) => item.amount > 0) ? ( // amount가 0보다 큰 항목이 있는지 확인
        cartItems.map(
          (item) =>
            item.amount > 0 && ( // amount가 0보다 클 때만 렌더링
              <CartItem key={item.id} item={item} />
            )
        )
      ) : (
        <h2>장바구니가 비어 있습니다.</h2> // 모든 amount가 0일 때
      )}
      <TotalContainer>
        <h3>총 가격: ₩ {totalAmount}</h3>
        <Button onClick={() => dispatch(openModal())}>장바구니 초기화</Button>
      </TotalContainer>
    </CartContainer>
  );
}
