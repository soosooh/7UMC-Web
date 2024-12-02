import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ModalPortal from "./components/ModalPortal";
import Modal from "./components/Modal";
import styled from "styled-components";
import zustandSlice from "./features/zustand/zustandSlice";

function App() {
  const { cartItems, calculateTotals, isOpen } = zustandSlice();

  useEffect(() => {
    calculateTotals();
  }, [cartItems]);

  return (
    <StyledContainer>
      <header>
        <Navbar />
      </header>
      <StyledMain>
        <CartContainer />
        {isOpen && (
          <ModalPortal>
            <Modal>
              <h4>담아두신 모든 음반을 삭제하시겠습니까?</h4>
            </Modal>
          </ModalPortal>
        )}
      </StyledMain>
      <footer>
        <Footer />
      </footer>
    </StyledContainer>
  );
}
export default App;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
