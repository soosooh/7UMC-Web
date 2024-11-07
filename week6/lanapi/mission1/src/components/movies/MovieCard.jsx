//피드백 적용완료
//미션1,2의 components>movieCard.jsx 파일을 보면 hover시에 보이는 overlay 부분이 한 컴포넌트 내에 같이 작성 되어 있는 것 같아요. 
//별도의 파일로 분리해서 import 하는 방식으로 수정해주세요!

// MovieCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Overlay from './Overlay';
import styled from 'styled-components';

const MovieCard = ({ movieId, posterPath, title, releaseDate, overview }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/movies/${movieId}`);
    };

    return (
        <Card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick}
        >
            <Poster src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
            {isHovered && <Overlay title={title} overview={overview} />}
            <Info>
                <Title>{title}</Title>
                <ReleaseDate>{releaseDate}</ReleaseDate>
            </Info>
        </Card>
    );
};

export default MovieCard;

const Card = styled.div`
    width: 170.65px;
    height: auto;
    border-radius: 10px 0px 0px 0px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        transform: scale(1.05);
    }
`;

const Poster = styled.img`
    width: 100%;
    height: 231.56px;
    object-fit: cover;
`;

const Info = styled.div`
    text-align: center;
    margin-top: 10px;
`;

const Title = styled.h3`
    font-size: 14px;
    margin: 0;
    color: #FFFFFF;
    text-align: left;
`;

const ReleaseDate = styled.p`
    font-size: 12px;
    margin: 5px 0 0 0;
    opacity: 0.8;
    text-align: left;
`;
