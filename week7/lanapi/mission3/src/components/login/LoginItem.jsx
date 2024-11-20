import React from 'react';
import styled from 'styled-components';

const LoginItem = ({ type, placeholder, register, error }) => (
  <FieldContainer>
    <TextInput 
      type={type} 
      placeholder={placeholder} 
      {...register}
    />
    <ErrorText>{error}</ErrorText>
  </FieldContainer>
);

export default LoginItem;

const FieldContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ErrorText = styled.p`
  color: #FF073D; 
  font-size: 14px;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
