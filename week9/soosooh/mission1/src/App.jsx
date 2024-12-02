import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <StyledContainer>
      <header>
        <Navbar />
      </header>
      <StyledMain>
        <CartContainer />
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
