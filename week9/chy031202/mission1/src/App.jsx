import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import CartContainer from './components/CartContaoner'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice'
import ModalPortal from './components/modals/modalpatal'
import Modal from './components/modals/modal'

function App() {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((store) => store.cart);

  useEffect(() =>{
    dispatch(calculateTotals())
  }, [cartItems, dispatch])
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <CartContainer />
        <ModalPortal >
          <Modal>
            담아두신 모든 음반을 삭제하시겠습니까?
          </Modal>
        </ModalPortal>
      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default App
