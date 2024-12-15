import React, { useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from '../src/features/cartSlice';
import ModalPortal from './components/ModalPortal';
import Modal from './components/modal';

const App = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
      {isOpen &&
        <ModalPortal>
          <Modal />
        </ModalPortal>
      }
    </>
  );
};

export default App;