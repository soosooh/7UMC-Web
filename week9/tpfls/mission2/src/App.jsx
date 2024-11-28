import React from 'react';
import { useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import Header from './components/Header';
import Cart from './components/Cart';
import Modal from './components/Modal';

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Cart />
      <Modal />
    </div>
  );
}
