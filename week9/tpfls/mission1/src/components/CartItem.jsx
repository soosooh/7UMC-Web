import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../features/cart/cartSlice';

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quantity = styled.p`
  margin: 5px 0;
  font-size: 16px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #6a5acd;
  cursor: pointer;
  font-size: 20px;
`;

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <CartItemContainer>
      <ItemDetails>
        <ItemImage src={item.img} alt={item.title} />
        <ItemInfo>
          <h4>{item.title}</h4>
          <p>{item.singer}</p>
          <p>₩ {item.price}</p>
        </ItemInfo>
      </ItemDetails>
      <Controls>
        <Button onClick={() => dispatch(increase(item.id))}>▲</Button>
        <Quantity>{item.amount}</Quantity>
        <Button onClick={() => dispatch(decrease(item.id))}>▼</Button>
      </Controls>
    </CartItemContainer>
  );
}
