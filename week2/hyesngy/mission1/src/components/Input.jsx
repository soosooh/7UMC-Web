import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: 1px solid black;
    padding: 0.5rem;
    width: 33.5rem;

    &.add {
        margin-right: 1.5rem;
    }

    &.edit {

        height: 2rem;
    }

    &:hover {
        border: 1px solid lightblue;
    }
`

const Input = ({ value, onChange, inputType }) => {
    return (
        <StyledInput
            className={inputType}
            type='text'
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;