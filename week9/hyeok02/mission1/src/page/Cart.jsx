import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart, calculateTotals } from "../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <CartContainer>
      <Header>장바구니</Header>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <EmptyMessage>장바구니가 비어 있습니다.</EmptyMessage>
        )}
      </CartItems>
      {cartItems.length > 0 && (
        <Footer>
          <Totals>
            <p>총 수량: {totalQuantity}개</p>
            <p>총 금액: ₩{totalAmount}</p>
          </Totals>
          <ClearButton onClick={() => dispatch(clearCart())}>
            장바구니 초기화
          </ClearButton>
        </Footer>
      )}
    </CartContainer>
  );
};

const CartContainer = styled.div`
  padding: 20px;
`;

const Header = styled.h2`
  margin-bottom: 20px;
`;

const CartItems = styled.div`
  margin-bottom: 20px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #777;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Totals = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const ClearButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

export default Cart;
