import React from 'react';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

const SpinnerContainer = styled.div`
 width: 100%;
 padding: 20px 0;
 display: flex;
 justify-content: center;
 align-items: center;
`;

const LoadingSpinner = () => (
 <SpinnerContainer>
   <ClipLoader
     color="#e50914"
     size={40}
     aria-label="Loading..."
   />
 </SpinnerContainer>
);

export default LoadingSpinner;