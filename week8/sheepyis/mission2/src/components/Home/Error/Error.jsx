import styled from "styled-components";
import colors from "../../../styles/colors";

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
    align-items: center;
`

const ErrorBox = styled.div`
    width: 2vw;
    height: 2vw;
    border: none;
    border-radius: 50%;
    background-color: ${colors.error};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
`

const ErrorP = styled.p`
    font-size: 0.8vw;
    font-weight: bold;
`

const Error = () => {
    return (
        <ErrorContainer>
            <ErrorBox>X</ErrorBox>
            <ErrorP>에러가 발생했습니다.</ErrorP>
        </ErrorContainer>
    )
}

export default Error;