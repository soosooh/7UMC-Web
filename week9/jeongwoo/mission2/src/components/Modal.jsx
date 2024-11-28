import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <ModalText>담아두신 모든 음반을 삭제하시겠습니까?</ModalText>
          <ButtonContainer>
            <YesButton onClick={handleClear}>네</YesButton>
            <NoButton onClick={() => dispatch(closeModal())}>아니요</NoButton>
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

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
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 500px;
  height: 160px;
  background: #FFFFFF;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 338px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ModalText = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin: 0;
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 256px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  background: #FFFFFF;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
`;

const YesButton = styled(Button)`
  border: 3px solid #6D6FFF;
  color: #6D6FFF;
  
  &:hover {
    background: #6D6FFF;
    color: #FFFFFF;
  }
`;

const NoButton = styled(Button)`
  border: 3px solid #D20000;
  color: #D20000;
  
  &:hover {
    background: #D20000;
    color: #FFFFFF;
  }
`;

export default Modal;