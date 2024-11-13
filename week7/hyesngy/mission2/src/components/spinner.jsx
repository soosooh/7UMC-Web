import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const spinner = () => {
  return (
    <SpinnerContainer>
      <ClipLoader color={'white'} size={100} />
    </SpinnerContainer>
  );
};

export default spinner;