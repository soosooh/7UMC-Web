import { useEffect, useState } from 'react'
import './styles/App.css'
import Navbar from './components/navbar'
import CartContainer from './components/CartContaoner'
import ModalPortal from './components/modals/modalpotal'
import Modal from './components/modals/modal'

import {useCartStore} from './features/cart/cartStore';
import { useModalStore } from './features/modal/modalStore'


import styled from "styled-components";


function App() {
  //const cartItems = useCartStore((state) => state.cartItems);
  const calculateTotals = useCartStore((state) => state.calculateTotals);
  const cartItems = useCartStore((state)=>state.cartItems);
  const isOpen = useModalStore((state)=>state.isOpen);


  useEffect(() =>{
    calculateTotals();
  }, [calculateTotals, cartItems]);
  

  return (
    <Main>
      <header>
        <Navbar />
      </header>
      <main>
        <CartContainer />
        {isOpen &&
            <ModalPortal >
            <Modal>
              담아두신 모든 음반을 삭제하시겠습니까?
            </Modal>
          </ModalPortal>
        } 
      </main>
      <footer>
        
      </footer>
    </Main>
  )
}

const Main = styled.main`
display:flex;
flex-direction:column;
align-items: center;
min-height: 100vh;
`

export default App
