import styled from 'styled-components';
import colors from './colors';

export const InputContainer = styled.div`
    position: relative;
`;

export const InputBox = styled.input`
    width: 22.5vw;
    height: 2.5vw;
    padding: 0 1vw;
    box-sizing: border-box;
    border: none;
    border-radius: 0.5vw;
    background-color: ${props => props.type === 'submit' ? colors.main : colors.white};
    color: ${props => props.type === 'submit' ? colors.white : colors.navBackground};
    cursor: pointer;
    font-size: 0.7vw;
    font-weight: bold;

    &:disabled {
        background-color: ${colors.navBackground};
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

export const ErrorP = styled.p`
    position: absolute;
    font-weight: 400;
    font-size: 0.5vw;
    color: ${colors.error};
    margin-top: 0.5vw;
`;
