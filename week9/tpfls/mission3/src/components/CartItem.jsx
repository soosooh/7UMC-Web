import React from 'react';
import styled from 'styled-components';
import useStore from '../store';

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

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #6a5acd;
  cursor: pointer;
  font-size: 20px;
`;

export default function CartItem({ item }) {
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);

  return (
    <CartItemContainer>
      <ItemDetails>
        <ItemImage src={item.img} alt={item.title} />
        <div>
          <h4>{item.title}</h4>
          <p>{item.singer}</p>
          <p>₩ {item.price}</p>
        </div>
      </ItemDetails>
      <Controls>
        <Button onClick={() => increase(item.id)}>▲</Button>
        <p>{item.amount}</p>
        <Button onClick={() => decrease(item.id)}>▼</Button>
      </Controls>
    </CartItemContainer>
  );
}
