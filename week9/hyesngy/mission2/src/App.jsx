import React, { useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/navbar';
import CartContainer from './components/CartContainer';
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
    <div>
      <GlobalStyles />
      <Navbar />
      {isOpen &&
        <ModalPortal>
          <Modal></Modal>
        </ModalPortal>
      }
      <CartContainer />
    </div>
  );
};

export default App;