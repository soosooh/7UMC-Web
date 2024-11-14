import React from 'react';
import styled from 'styled-components';
import LoginItem from './LoginItem';

const LoginList = ({ register, touchedFields, errors }) => (
    <Form>
        <LoginItem
            type="email"
            placeholder="이메일 주소를 입력하세요."
            register={register("email")}
            isTouched={touchedFields.email}
            error={errors.email?.message}
        />
        <LoginItem
            type="password"
            placeholder="비밀번호를 입력하세요."
            register={register("password")}
            isTouched={touchedFields.password}
            error={errors.password?.message}
        />
    </Form>
);

export default LoginList;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
`;
