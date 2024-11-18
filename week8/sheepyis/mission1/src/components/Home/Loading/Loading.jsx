import styled, { keyframes } from "styled-components";
import colors from "../../../styles/colors";

const bounce = keyframes`
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-0.5vw);
    }
    75% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
    }
`;

const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.25vw;
`

const CircleContainer = styled.div`
    display: flex;
    gap: 0.25vw;
`;

const Circle = styled.div`
    width: 0.8vw;
    height: 0.8vw;
    border: 0.05vw solid ${colors.black};
    border-radius: 50%;
    animation: ${bounce} 1.5s ease-in-out 1;
    
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
        background-color: ${colors.buttonColor2};
    }

    &:nth-child(1) {
        animation-delay: 0s;
    }

    &:nth-child(2) {
        animation-delay: 0.3s;
    }

    &:nth-child(3) {
        animation-delay: 0.6s;
    }

    &:nth-child(4) {
        animation-delay: 0.9s;
    }

    &:nth-child(5) {
        animation-delay: 1.2s;
    }
`;

const LoadingP = styled.p`
    font-size: 0.8vw;
    font-weight: bold;
`

const Loading = () => {
    return (
        <LoadingContainer>
            <CircleContainer>
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </CircleContainer>

            <LoadingP>게시물을 불러오는 중입니다.</LoadingP>
        </LoadingContainer>
    );
}

export default Loading;
