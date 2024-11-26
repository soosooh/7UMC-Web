import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './app/store';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Cart from './components/Cart';
import cartItems from './data/cartItems';
import { initializeItems } from './features/cartSlice';
import { CartIcon } from './icons/icon';

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
     padding: 0;
    font-family: Arial, sans-serif;
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;

const AppContainer = styled.div`
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  background-color: #6f73f9;
  height: 80px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: white;
  margin-left: 80px;
  line-height: 80px;
  text-align : left
  margin-bottom: 20px;
`;

const StyledCartIcon = styled.div`
  position: absolute;
  right: 100px; /* 오른쪽 정렬 */
  top: 25px; /* 상단 여백 */
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 30px;
    color: white; /* 아이콘 색상 */
    cursor: pointer;
  }

  .badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 4px 6px;
    border-radius: 50%;
  }
`;

function App() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    dispatch(initializeItems(cartItems));
  }, [dispatch]);

  console.log(totalQuantity);
  return (
    <AppContainer>
      <Header>
        <Title>UMC PLAY LIST</Title>
        <StyledCartIcon>
          <CartIcon />
          {totalQuantity > 0 && <span className="badge">{totalQuantity}</span>}
        </StyledCartIcon>
      </Header>
      <Cart />
    </AppContainer>
  );
}

const AppWrapper = () => (
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);

export default AppWrapper;
