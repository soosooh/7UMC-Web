import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../slice/modalSlice';
import { clearCart } from '../slice/cartSlice'; // 여기서 clearCart를 올바르게 임포트해야 합니다.
import {
  ModalOverlay,
  ModalContainer,
  ModalText,
  ButtonContainer,
  ModalButton
} from '../components/ModalItem';

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalText>담아두신 모든 음반을 삭제하시겠습니까?</ModalText>
        <ButtonContainer>
          <ModalButton
            primary
            onClick={() => {
              dispatch(clearCart()); // clearCart 액션 호출
              dispatch(closeModal());
            }}
          >
            네
          </ModalButton>
          <ModalButton onClick={() => dispatch(closeModal())}>아니요</ModalButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
