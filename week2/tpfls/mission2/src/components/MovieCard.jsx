import React, { useState } from 'react';
import styled from 'styled-components';
import MovieDetail from './MovieDetail';

const BigBox = styled.div`
    width: 194px;
    position: relative;
    margin: 1vw 0.5vw;
    cursor: pointer;
`;

const TopBox = styled.div`
    width: 194px;
    height: 251.59px;
    background: #D9D9D9;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden; 
`;

const BottomBox = styled.div`
    width: 194px;
    height: 77.41px;
    background: #383B67;
    border-radius: 0px 0px 10px 10px;
    justify-content: center;
    display: flex;
    padding-top: 5px;
`;

const TitleBox = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`;

const Title = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #FFFFFF;
`;

const Image1 = styled.img`
    width: 100%;
    height: 100%;
`;

const MovieCard = ({ title, vote_average, poster_path, overview }) => {
    const [hovered, setHovered] = useState(false);
    const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <BigBox
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <TopBox>
                <Image1 src={posterUrl} alt={title} />
                <MovieDetail title={title} overview={overview} show={hovered} />
            </TopBox>
            <BottomBox>
                <TitleBox>
                    <Title>{title}</Title>
                    <Title>{vote_average}</Title>
                </TitleBox>
            </BottomBox>
        </BigBox>
    );
};

export default MovieCard;
