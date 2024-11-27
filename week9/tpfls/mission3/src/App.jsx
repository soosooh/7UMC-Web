import React from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Modal from './components/Modal';
import useStore from './store'; // Zustand 상태 사용

export default function App() {
  const calculateTotals = useStore((state) => state.calculateTotals); // Zustand의 calculateTotals 가져오기
  const cartItems = useStore((state) => state.cartItems);

  React.useEffect(() => {
    calculateTotals(); // 총합 계산
  }, [cartItems, calculateTotals]); // cartItems 변경 시 총합 다시 계산

  return (
    <div>
      <Header />
      <Cart />
      <Modal />
    </div>
  );
}
