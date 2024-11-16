// Banner.jsx
import React from 'react';
import styled from 'styled-components';

const Banner = ({ movie }) => (
    <BannerContainer>
        <BackgroundImage src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
        <ContentContainer>
            <Title>{movie.title}</Title>
            <Rating>평균 {movie.vote_average}</Rating>
            <ReleaseDate>{movie.release_date} | {movie.runtime}분</ReleaseDate>
            <Overview>{movie.overview}</Overview>
        </ContentContainer>
    </BannerContainer>
);

const BannerContainer = styled.div`
    position: relative;
    color: white;
`;

const BackgroundImage = styled.img`
    width: 100%;
    height: 50vh;
    object-fit: cover;
`;

const ContentContainer = styled.div`
    padding: 20px;
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
`;

const Title = styled.h2`
    font-size: 2rem;
    margin: 10px 0;
`;

const Rating = styled.p`
    font-size: 1.2rem;
`;

const ReleaseDate = styled.p`
    font-size: 1rem;
    color: #ccc;
`;

const Overview = styled.p`
    margin: 10px 0;
`;

export default Banner;
