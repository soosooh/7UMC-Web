import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";
import styled from "styled-components";

const ModalButton = () => {
  const dispatch = useDispatch();
  //const { isOpen } = useSelector((state) => state.modal);
  return (
    <ButtonContainer>
      <YesButton
        type="button"
        className="btn confirm-btn"
        onClick={() => {
          console.log("장바구니 초기화");
          dispatch(clearCart());
          //TODO : 모달도 꺼지는 상태를 연결
          dispatch(closeModal());
        }}
      >
        네
      </YesButton>
      <NoButton
        type="button"
        className="btn clear-btn"
        onClick={() => {
          //TODO : 모달도 꺼지는 상태를 연결
          console.log("모달 닫기");
          dispatch(closeModal());
        }}
      >
        아니요
      </NoButton>
    </ButtonContainer>
  );
};

export default ModalButton;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const YesButton = styled.button`
  width: 6rem;
  background-color: white;
  color: #6d6fff;
  border-color: #6d6fff;
`;

const NoButton = styled.button`
  width: 6rem;
  background-color: white;
  color: #d20000;
  border-color: #d20000;
`;
