import React, { useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import ModalPortal from './components/ModalPortal';
import Modal from './components/modal';
import useStore from './store/useStore';

const App = () => {
  const isOpen = useStore((state) => state.modal.isOpen);

  return (
    <div>
      <GlobalStyles />
      <Navbar />
      {isOpen &&
        <ModalPortal>
          <Modal />
        </ModalPortal>
      }
      <CartContainer />
    </div>
  );
};

export default App;