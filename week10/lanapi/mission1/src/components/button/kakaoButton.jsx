import React from 'react';
import styled from 'styled-components';
import { handleKakaoLogin } from '../../context/AuthLKakao'; // 파일 이름 변경 반영

const KakaoButton = () => {
  return (
    <StyledButton onClick={handleKakaoLogin}>
      카카오톡으로 로그인
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: #fee500;
  color: #000000;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 20px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin: 10px auto;
  display: block;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffd700;
  }

  &:active {
    background-color: #eac400;
  }
`;

export default KakaoButton;


