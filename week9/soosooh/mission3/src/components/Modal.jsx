import zustandSlice from "../features/zustand/zustandSlice";
import ModalButton from "./ModalButton";
import styled from "styled-components";

const Modal = () => {
  const { isOpen, closeModal } = zustandSlice();

  if (!isOpen) return null; // 모달이 닫혀 있으면 렌더링하지 않음

  return (
    <ModalContainer
      onClick={() => {
        closeModal(); // 배경 클릭 시 모달 닫기
      }}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <StyledH>담아두신 모든 음반을 삭제하시겠습니까?</StyledH>
        <ModalButton />
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* 회색 반투명 배경 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* 화면 위로 */
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  width: 90%;
  max-width: 500px;
  text-align: center;
`;
const StyledH = styled.h4`
  color: black;
`;
