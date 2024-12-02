import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart, calculateTotals } from "../redux/cartSlice";
import CartItem from "./CartItem";
import ConfirmationModal from "./Modal";

const Cart = () => {
  const { cartItems, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  const handleClearCart = () => {
    setIsModalOpen(true);
  };

  const confirmClearCart = () => {
    dispatch(clearCart());
    setIsModalOpen(false);
  };

  const cancelClearCart = () => {
    setIsModalOpen(false);
  };

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
          <ClearButton onClick={handleClearCart}>장바구니 초기화</ClearButton>
        </Footer>
      )}
      {isModalOpen && (
        <ConfirmationModal
          message="장바구니를 초기화 하시겠습니까?"
          onConfirm={confirmClearCart}
          onCancel={cancelClearCart}
        />
      )}
    </CartContainer>
  );
};

const CartContainer = styled.div`
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 24px;
`;

const CartItems = styled.div`
  margin: 20px 0;
`;

const EmptyMessage = styled.p`
  font-size: 18px;
  color: gray;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Totals = styled.div`
  text-align: left;
`;

const ClearButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default Cart;
