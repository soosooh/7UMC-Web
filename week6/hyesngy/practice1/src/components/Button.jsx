import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    margin: 0 0.25rem;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
        background: lightblue;
        transition: 0.3s ease;
    }
`

const Button = ({ onClick, text, type }) => {
    return (
        <StyledButton onClick={onClick} type={text}>
            {text}
        </StyledButton>
    );
};

export default Button;