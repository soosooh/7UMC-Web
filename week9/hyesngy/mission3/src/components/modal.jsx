import React from "react";
import styled from "styled-components";
import useStore from '../store/useStore';

const Modal = () => {
  const isOpen = useStore((state) => state.modal.isOpen);
  const clearCart = useStore((state) => state.clearCart);
  const closeModal = useStore((state) => state.closeModal);

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalWrapper>
        <ModalContent>
          <ModalText>담아두신 모든 음반을 삭제하시겠습니까?</ModalText>
          <ButtonGroup>
            <Button onClick={() => {
              clearCart();
              closeModal();
            }}>
              네
            </Button>
            <Button onClick={closeModal}>
              아니오
            </Button>
          </ButtonGroup>
        </ModalContent>
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalWrapper = styled.div`
  background: white;
  border-radius: 10px;
  width: 400px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const ModalText = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`
const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`
const Button = styled.button`
  color: black;
  background-color: white;
  width: 4.5rem;
  height: 2rem;
  padding: 0;
  border: 1.5px solid #6D6FFF;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
      border: 2px solid #6D6FFF;
  }
`