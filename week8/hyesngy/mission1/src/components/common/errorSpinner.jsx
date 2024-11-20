import React from 'react';
import { Comment } from 'react-loader-spinner'
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
`;

const ErrorSpinner = () => {
  return (
    <SpinnerContainer>
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
      <h3>에러가 발생했습니다.</h3>

    </SpinnerContainer>
  );
};

export default ErrorSpinner;

