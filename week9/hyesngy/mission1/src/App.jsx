import React, { useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/navbar';
import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from '../src/features/cart/cartSlice';

const App = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <CartContainer />
    </div>
  );
};

export default App;