import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../features/cartSlice';
import { showModal } from '../features/modalSlice';
import {
  CartContainer,
  CartItem,
  ItemInfo,
  ItemImage,
  ItemDetails,
  QuantityControl,
  ControlButton,
  TotalContainer,
  ClearButton,
  ButtonContainer,
} from '../styles/style';

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  //   console.log(items);

  return (
    <CartContainer>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        당신이 선택한 음반
      </h1>
      {items.map((item) => (
        <CartItem key={item.id}>
          <ItemInfo>
            <ItemImage src={item.img} alt={item.title} />
            <ItemDetails>
              <h3>{item.title}</h3>
              <p>{item.singer}</p>
              <p>{item.price}원</p>
            </ItemDetails>
          </ItemInfo>
          <QuantityControl>
            <ControlButton onClick={() => dispatch(addToCart(item))}>
              ▲
            </ControlButton>
            <span>{item.amount}</span>
            <ControlButton onClick={() => dispatch(removeFromCart(item.id))}>
              ▼
            </ControlButton>
          </QuantityControl>
        </CartItem>
      ))}
      <TotalContainer>
        <strong>총 가격</strong>
        <strong>{totalPrice}원</strong>
      </TotalContainer>
      <ButtonContainer>
        <ClearButton onClick={() => dispatch(showModal())}>
          장바구니 초기화
        </ClearButton>
      </ButtonContainer>
    </CartContainer>
  );
}

export default Cart;
