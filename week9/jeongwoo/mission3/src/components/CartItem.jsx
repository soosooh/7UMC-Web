import styled from 'styled-components';
import { ChevronDown, ChevronUp } from '../constants/icons';
import useCartStore from '../store/cartStore';

const CartItem = ({ id, img, title, singer, price, amount }) => {
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  
  return (
    <CartItemWrapper>
      <ImageContainer>
        <img src={img} alt={title} />
      </ImageContainer>
      <ItemInfo>
        <Title>{`${title} | ${singer}`}</Title>
        <Price>₩ {parseInt(price).toLocaleString()}</Price>
      </ItemInfo>
      <CountContainer>
        <ControlButton onClick={() => increase(id)}>
          <ChevronUp />
        </ControlButton>
        <Amount>{amount}</Amount>
        <ControlButton onClick={() => decrease(id)}>
          <ChevronDown />
        </ControlButton>
      </CountContainer>
    </CartItemWrapper>
  );
};

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  position: relative;
  width: 100%;
  height: 80px;
`;

const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemInfo = styled.div`
  margin-left: 24px;
  flex: 1;
`;

const Title = styled.h3`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 6px;
`;

const Price = styled.p`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #717171;
`;

const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  background: #FFFFFF;
`;

const ControlButton = styled.button`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Amount = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  text-align: center;
`;

export default CartItem;