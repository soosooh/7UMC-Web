import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import { clearCart } from '../features/cart/cartSlice';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ConfirmButton = styled(Button)`
  background-color: #ff6b6b;
  color: white;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
`;

export default function Modal() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <h3>담아두신 모든 음반을 삭제하시겠습니까?</h3>
        <ConfirmButton
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          네
        </ConfirmButton>
        <CancelButton onClick={() => dispatch(closeModal())}>아니요</CancelButton>
      </ModalContainer>
    </ModalOverlay>
  );
}
