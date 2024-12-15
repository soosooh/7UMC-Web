import React from 'react';
import styled from 'styled-components';
import useLogin from '../../utils/use-login';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/LoginContext';
import { useMutation } from '@tanstack/react-query';
import KakaoBtn from '../button/kakaoButton';
import { useEffect } from "react";
import axios from "axios";
import getRedirectURI from '../../apis/redirectURI';

const Loginuseform = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, errors, isValid } = useLogin();
    

    return (
        <MainWrapp>
            <h1>로그인</h1>
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <Form >
                <Input placeholder='이메일을 입력해주세요!' type={'email'} {...register("email")} />
                <p style={{ color: 'red', marginTop: 0 }}>{errors.email?.message}</p>
                <Input placeholder='비밀번호를 입력해주세요!' type={'password'} {...register("password")} />
                <p style={{ color: 'red', marginTop: 0 }}>{errors.password?.message}</p>
                <Submit value='로그인' type='submit' disabled={!isValid} isValid={isValid} />
                <KakaoBtn/>
            </Form>
        </MainWrapp>

    );
};

const Form = styled.form`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
width:80%;
`

const MainWrapp = styled.main`
display:flex;
height:100%;
justify-content: center;
flex-direction: column;
align-items: center;

`

const Input = styled.input`
max-width:450px;
width: 100%;
height: 3em;

background: #FFFFFF;
border-radius: 10px;

`

const Submit = styled.input`
/* 로그인 버튼 배경 */

max-width: 458px;
width: 100%;
height: 3em;


background: ${(props) => (props.isValid ? '#FF073D' : 'gray')};

border-radius: 10px;
font-size:20px;
color:white;
margin-bottom:20px;

cursor: ${(props) => (props.isValid ? 'pointer' : 'not-allowed')};
    transition: background-color 0.3s;

    &:disabled {
        background: gray;
    }
`

export default Loginuseform;
