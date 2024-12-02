import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { increase, decrease } from "../redux/cartSlice";
import { ChevronUp, ChevronDown } from "../constant/icons";

const CartItem = ({ id, title, singer, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <ItemContainer>
      <AlbumCover src={img} alt={title} />
      <Details>
        <Title>{title}</Title>
        <Singer>{singer}</Singer>
        <Price>₩{price}</Price>
      </Details>
      <QuantityControls>
        <ChevronButton onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </ChevronButton>
        <Quantity>{amount}</Quantity>
        <ChevronButton onClick={() => dispatch(decrease(id))}>
          <ChevronDown />
        </ChevronButton>
      </QuantityControls>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const AlbumCover = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

const Details = styled.div`
  flex: 1;
  margin-left: 15px;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

const Singer = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #777;
`;

const Price = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const QuantityControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChevronButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px; 
  color: black; 
  padding: 5px;

  &:hover {
    color: #000; 
  }
`;

const Quantity = styled.span`
  margin: 5px 0;
  font-size: 16px;
  font-weight: bold;
`;

export default CartItem;
