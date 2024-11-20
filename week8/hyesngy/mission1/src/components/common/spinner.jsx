import React from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SyncLoader color={'skyblue'} size={15} />
      <h3>게시글을 불러오는 중입니다.</h3>
    </SpinnerContainer>
  );
};

export default Spinner;