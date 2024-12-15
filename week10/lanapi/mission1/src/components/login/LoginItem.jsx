import React from 'react';
import styled from 'styled-components';

const LoginItem = ({ type, placeholder, register, error }) => {
  const { ref, ...restRegister } = register; // register에서 ref 분리
  
  return (
    <FieldContainer>
      <TextInput
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...restRegister} // hasError를 제외한 나머지 속성만 전달
        $hasError={!!error} // styled-components에서 props 전달 시 $를 접두사로 사용
      />
      <ErrorText>{error}</ErrorText>
    </FieldContainer>
  );
};

export default LoginItem;

const FieldContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${(props) => (props.hasError ? '#FF073D' : '#000000')}; // 에러 시 테두리 변경
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? '#FF073D' : '#000000')}; // 포커스 시에도 에러 색상 유지
  }

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
