import styled from 'styled-components';

export const ModalOverlay = styled.div`
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

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ModalText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;  /* 버튼 사이 간격 설정 */
`;

export const ModalButton = styled.button`
  background-color: white;
  border-radius: 5px 0px 0px 0px;
  font-size: 1rem;
  padding: 10px 20px;
  border: 3px solid;
  cursor: pointer;
  display: inline-block;

  ${(props) =>
    props.primary
      ? `
    color: #5d5bf0;
    border-color: #6D6FFF;
    &:hover {
      background-color: #f0f0f0;
    }
  `: 
        `
    color: black;
    border-color: #D20000;
    &:hover {
      background-color: #f0f0f0;
    }
  `}
`;
