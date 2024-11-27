import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import CartItem from './components/CartItem';
import Modal from './components/Modal';
import { calculateTotals } from './features/cart/cartSlice';
import { openModal } from './features/modal/modalSlice';
import { CartIcon } from './constants/icons';

function App() {
 const { cartItems, amount, total } = useSelector((state) => state.cart);
 const { isOpen } = useSelector((state) => state.modal);
 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(calculateTotals());
 }, [cartItems, dispatch]);

 return (
   <Container>
     {isOpen && <Modal />}
     <Header>
       <HeaderContent>
         <Title>UMC PlayList</Title>
         <CartContainer>
           <CartIcon />
           <CartAmount>{amount}</CartAmount>
         </CartContainer>
       </HeaderContent>
     </Header>
     <Main>
       <MainTitle>당신이 선택한 음반</MainTitle>
       {cartItems.length === 0 ? (
         <EmptyMessage>고객님이 좋아하는 음반을 담아보세요~!</EmptyMessage>
       ) : (
         <>
           <MusicList>
             {cartItems.map((item) => (
               <CartItem key={item.id} {...item} />
             ))}
           </MusicList>
           <Divider />
           <BottomContainer>
             <PriceContainer>
               <TotalPrice>총 가격</TotalPrice>
               <Amount>₩ {total.toLocaleString()}</Amount>
             </PriceContainer>
             <ClearButton onClick={() => dispatch(openModal())}>
               장바구니 초기화
             </ClearButton>
           </BottomContainer>
         </>
       )}
     </Main>
   </Container>
 );
}

const Container = styled.div`
 width: 100%;
 min-height: 100vh;
 background: #FFFFFF;
`;

const Header = styled.header`
 width: 100%;
 height: 60px;
 background: #6D6FFF;
`;

const HeaderContent = styled.div`
 max-width: 1411px;
 margin: 0 auto;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 20px;
`;

const Title = styled.h1`
 font-family: 'Inter', sans-serif;
 font-weight: 700;
 font-size: 24px;
 line-height: 29px;
 color: #FFFFFF;
 margin: 0;
`;

const CartContainer = styled.div`
 position: relative;
 width: 42px;
 height: 38px;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const CartAmount = styled.span`
 position: absolute;
 top: -8px;
 right: -8px;
 background: #ef4444;
 color: #FFFFFF;
 border-radius: 50%;
 min-width: 20px;
 height: 20px;
 padding: 0 6px;
 font-family: 'Inter', sans-serif;
 font-weight: 700;
 font-size: 14px;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Main = styled.main`
 max-width: 1394px;
 margin: 0 auto;
 padding: 40px 20px;
`;

const MainTitle = styled.h2`
 font-family: 'Inter', sans-serif;
 font-weight: 700;
 font-size: 40px;
 line-height: 48px;
 text-align: center;
 color: #000000;
 margin-bottom: 40px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #6D6FFF;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 2rem;
`;

const MusicList = styled.div`
 display: flex;
 flex-direction: column;
 gap: 38px;
`;

const Divider = styled.div`
 width: 100%;
 height: 3px;
 background: #D9D9D9;
 margin: 40px 0;
`;

const BottomContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 30px;
`;

const PriceContainer = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

const TotalPrice = styled.span`
 font-family: 'Inter', sans-serif;
 font-weight: 700;
 font-size: 20px;
 line-height: 24px;
 color: #000000;
`;

const Amount = styled.span`
 font-family: 'Inter', sans-serif;
 font-weight: 700;
 font-size: 20px;
 line-height: 24px;
 color: #000000;
`;

const ClearButton = styled.button`
 width: 200px;
 height: 40px;
 background: #FFFFFF;
 border: 3px solid #D20000;
 border-radius: 5px;
 font-family: 'Inter', sans-serif;
 font-weight: 700;
 font-size: 20px;
 line-height: 24px;
 color: #D20000;
 cursor: pointer;
 
 &:hover {
   background: #D20000;
   color: #FFFFFF;
 }
`;

export default App;