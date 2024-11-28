import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { openModal } from '../features/modalSlice';

const footer = () => {
  const { total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <FooterContainer>
      <PriceDiv>
        <TextP>총 가격</TextP>
        <TextP>\ {total}원</TextP>
      </PriceDiv>
      <ResetButton onClick={() => {
        dispatch(openModal());
      }}>
        장바구니 초기화</ResetButton>
    </FooterContainer>
  );
};

export default footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 40%;
  margin: 3rem 0;
`
const PriceDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const TextP = styled.p`
  font-size: 18px;
`
const ResetButton = styled.div`
  width: 12.5rem;
  align-self:center;
  padding: 0.25rem 0.5rem;
  border: 1px solid red;
  border-radius: 0.5rem;
  color: red;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;

  &:hover{
    border: 2px solid red;
  }
`