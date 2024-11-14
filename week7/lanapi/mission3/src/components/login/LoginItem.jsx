import React from 'react';
import styled from 'styled-components';

// isTouched를 DOM 요소에 전달하지 않고 스타일링에만 사용하도록 설정
const Input = styled.input.withConfig({
    shouldForwardProp: (prop) => prop !== 'isTouched',
})`
    width: 100%;
    padding: 12px;
    border: 1px solid ${(props) => (props.isTouched ? '#FF073D' : '#444')};
    border-radius: 8px;
    font-size: 1rem;
    background-color: #FFFFFF;
    color: #000;
    transition: border-color 0.3s;

    &:focus {
        outline: none;
        border-color: #FF073D;
    }
`;

const LoginItem = ({ type, placeholder, register, isTouched, error }) => (
    <Field>
        <Input
            type={type}
            placeholder={placeholder}
            {...register}
            isTouched={isTouched} // 스타일에만 사용되며 DOM으로는 전달되지 않음
        />
        {error && <ErrorText>{error}</ErrorText>}
    </Field>
);

export default LoginItem;

const Field = styled.div`
    width: 100%;
    margin-bottom: 2rem;
    position: relative;
`;

const ErrorText = styled.p`
    color: #FF073D;
    font-size: 1rem;
    position: absolute;
    bottom: -40px;
    left: 0;
`;
