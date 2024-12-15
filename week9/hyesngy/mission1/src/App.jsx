import React, { useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import GlobalStyles from './styles/GlobalStyles';
import { router } from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from '../src/features/cart/cartSlice';

const App = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;