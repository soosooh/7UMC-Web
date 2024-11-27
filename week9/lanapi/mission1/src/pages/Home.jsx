import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../slice/modalSlice';
import Modal from './Modal';
import { CartIcon } from '../components/icons';
import { CartList } from '../components/CartList';
import {
  HomeContainer,
  Header,
  Title,
  CartIconContainer,
  CartItemCount,
  Main,
  Subtitle,
  EmptyCartMessage,
  Divider,
  Footer,
  TotalContainer,
  TotalText,
  TotalPrice,
  ClearCartButton
} from '../components/HomeItem';

const Home = () => {
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((total, item) => total + item.amount, 0);
  const totalPrice = items.reduce((total, item) => total + item.amount * item.price, 0);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <HomeContainer>
      <Header>
        <Title>UMC PlayList</Title>
        <CartIconContainer>
          <CartIcon />
          <CartItemCount>{totalItems || 0}</CartItemCount>
        </CartIconContainer>
      </Header>
      <Main>
        <Subtitle>당신이 선택한 음반</Subtitle>
        {items.length === 0 ? (
          <EmptyCartMessage>고객님이 좋아하는 음반을 담아보세요~!</EmptyCartMessage>
        ) : (
          <>
            <CartList />
            <Divider />
            <Footer>
              <TotalContainer>
                <TotalText>총 가격</TotalText>
                <TotalPrice>₩ {totalPrice || 0}</TotalPrice>
              </TotalContainer>
              <ClearCartButton onClick={handleOpenModal}>장바구니 초기화</ClearCartButton>
            </Footer>
          </>
        )}
      </Main>
      <Modal />
    </HomeContainer>
  );
};

export default Home;
