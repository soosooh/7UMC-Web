import styled from 'styled-components';

const NotFound = () => {
    return (
        <Container>
            <WhiteHeading>요청하신 페이지를 찾을 수 없습니다.</WhiteHeading>
            <WhiteText>해당 페이지의 링크를 확인해주세요.</WhiteText>
        </Container>
    );
};

export default NotFound;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

const WhiteHeading = styled.h1`
    color: white;
    font-size: 2.5rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

const WhiteText = styled.p`
    color: white;
    font-size: 1.2rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;
