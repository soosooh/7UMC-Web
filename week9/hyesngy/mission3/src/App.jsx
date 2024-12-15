import React, { useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { RouterProvider } from "react-router-dom";
import { router } from './routes';
import ModalPortal from './components/ModalPortal';
import Modal from './components/modal';
import useSlice from './features/useSlice';

const App = () => {
  const isOpen = useSlice((state) => state.modal.isOpen);

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