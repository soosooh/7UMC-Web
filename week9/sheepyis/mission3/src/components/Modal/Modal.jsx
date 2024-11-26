import styled from "styled-components";
import colors from "../../styles/colors";
import useCartStore from "../../features/cart/cartSlice";
import useModalStore from "../../features/modal/modalSlice";

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

const ModalContent = styled.div`
    background: ${colors.white};
    border-radius: 0.5vw;
    width: 25vw;
    height: 8vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1vw;
`;

const ModalP = styled.p`
    font-size: 1vw;
    font-weight: bold;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 2vw;
`;

const ModalButton = styled.button`
    width: 4vw;
    height: 2vw;
    background-color: ${colors.white};
    font-size: 1vw;
    border: 0.15vw solid;
    border-color: ${(props) => (props.confirm ? colors.headerBackground : colors.init)};
    border-radius: 0.25vw;
    color: ${(props) => (props.confirm ? colors.headerBackground : colors.init)};
    cursor: pointer;
`;

const Modal = () => {
    const clearCart = useCartStore((state) => state.clearCart);
    const closeModal = useModalStore((state) => state.closeModal);

    const handleConfirm = () => {
        clearCart();
        closeModal();
    };

    const handleClose = () => {
        closeModal();
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <ModalP>담아두신 모든 음반을 삭제하시겠습니까?</ModalP>
                <ButtonContainer>
                    <ModalButton confirm onClick={handleConfirm}>네</ModalButton>
                    <ModalButton onClick={handleClose}>아니요</ModalButton>
                </ButtonContainer>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;
