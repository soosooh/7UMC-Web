import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../features/modalSlice';
import { clearCart } from '../features/cartSlice';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 400px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  justify-content: space-between;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  .yes {
    background-color: #6f73f9;
    color: white;

    &:hover {
      background-color: #5b5fd1;
    }
  }

  .no {
    background-color: #f44336;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;

const Modal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.modal.isVisible);

  if (!isVisible) return null; // 모달이 보이지 않을 때는 렌더링하지 않음

  return (
    <ModalOverlay>
      <ModalContainer>
        <h3>담아두신 음반을 모두 삭제하시겠습니까?</h3>
        <ButtonGroup>
          <button
            className="yes"
            onClick={() => {
              dispatch(clearCart()); // 장바구니 초기화
              dispatch(hideModal()); // 모달 숨기기
            }}
          >
            네
          </button>
          <button className="no" onClick={() => dispatch(hideModal())}>
            아니요
          </button>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
