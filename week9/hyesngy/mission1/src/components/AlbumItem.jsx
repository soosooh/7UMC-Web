import React from 'react';
import styled from 'styled-components';
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { increase, decrease, removeItem } from '../../features/cart/cartSlice';

const AlbumItem = ({ props }) => {
  const dispatch = useDispatch();

  return (
    <ItemWrapper>
      <LeftDiv>
        <img src={props.img} alt='album-cover' width='80px' height='80px' />
        <TextDiv>
          <TitleP>
            {props.title} | {props.singer}
          </TitleP>
          <PriceP>\{props.price}</PriceP>
        </TextDiv>
      </LeftDiv>
      <RightDiv>
        <StyledIcon as={FaSortUp} onClick={() => dispatch(increase(props.id))} />
        {props.amount}
        <StyledIcon as={FaSortDown} onClick={() => {
          if (props.amount === 1) {
            dispatch(removeItem(props.id));
            return;
          }
          dispatch(decrease(props.id))
        }} />
      </RightDiv>
    </ItemWrapper>
  );
};

export default AlbumItem;

const ItemWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const LeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
`
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
`
const TitleP = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: black;
`
const PriceP = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #717171;
`
const StyledIcon = styled.div`
  cursor: pointer;
  color: #4a4aff;
  &:hover {
    transform: scale(1.2);
  }
`