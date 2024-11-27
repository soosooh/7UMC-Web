import React from 'react';
import styled from 'styled-components';
import useStore from '../store';

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
  const { modalOpen, clearCart, closeModal } = useStore();

  if (!modalOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <h3>담아두신 모든 음반을 삭제하시겠습니까?</h3>
        <ConfirmButton
          onClick={() => {
            clearCart();
            closeModal();
          }}
        >
          네
        </ConfirmButton>
        <CancelButton onClick={closeModal}>아니요</CancelButton>
      </ModalContainer>
    </ModalOverlay>
  );
}
