import React from 'react';
import LoginItem from './LoginItem';
import styled from 'styled-components';
import KakaoButton from '../../components/button/kakaoButton';

const LoginList = ({ register, errors, isValid }) => (
  <>
    <LoginItem 
      type="email" 
      placeholder="이메일을 입력해주세요" 
      register={register("email")} 
      error={errors.email?.message} 
    />
    <LoginItem 
      type="password" 
      placeholder="비밀번호를 입력해주세요" 
      register={register("password")} 
      error={errors.password?.message} 
    />
    <LoginButton type="submit" disabled={!isValid}>로그인</LoginButton>

    <KakaoButtonContainer>
      <KakaoButton />
    </KakaoButtonContainer>
  </>
);

export default LoginList;

const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? '#413F3F' : '#FF073D')};
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: #FFFFFF;

  &:hover {
    background-color: ${(props) => !props.disabled && '#000000'};
  }

  @media (max-width: 768px) {
    height: 45px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 12px;
  }
`;

const KakaoButtonContainer = styled.div`
  margin-top: 15px;
  text-align: center;
`;
