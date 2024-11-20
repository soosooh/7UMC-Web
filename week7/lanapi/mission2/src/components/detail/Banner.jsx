//반응형 1차 수정 완료

import React from 'react';
import styled from 'styled-components';

const Banner = ({ movie }) => (
    <MovieImageWrapper backImg={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path || ''}`}>
        <Overlay>
            <BannerContent>
                <Title>{movie?.title}</Title>
                <Rate>평점: {movie?.vote_average}</Rate>
                <YearAndRuntime>개봉연도: {movie?.release_date?.substring(0, 4)} | 러닝타임: {movie?.runtime}분</YearAndRuntime>
                <Slogan>{movie?.tagline}</Slogan>
                <Overview>{movie?.overview}</Overview>
            </BannerContent>
        </Overlay>
    </MovieImageWrapper>
);

export default Banner;

const MovieImageWrapper = styled.div`
    width: 100vw;
    height: 500px;
    position: relative;
    background-image: url(${(props) => props.backImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    overflow: hidden;

    @media (max-width: 768px) {
        height: 300px; // 모바일에서는 배경 이미지 높이 줄이기
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 33%, rgba(0, 0, 0, 0.4) 66%, rgba(0, 0, 0, 0) 100%);
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding-left: 40px;

    @media (max-width: 768px) {
        padding-left: 20px; // 모바일에서는 여백을 줄여줌
    }
`;

const BannerContent = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    text-align: left;
    max-width: 500px;

    @media (max-width: 768px) {
        max-width: 80%; // 모바일에서는 콘텐츠 너비를 줄여줌
    }
`;

const Title = styled.h2`
    font-size: 43px;
    margin-bottom: 8px;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 30px; // 모바일에서 제목 크기 줄이기
    }
`;

const Rate = styled.p`
    font-size: 19px;
    margin-bottom: 8px;

    @media (max-width: 768px) {
        font-size: 16px; // 모바일에서 텍스트 크기 줄이기
    }
`;

const YearAndRuntime = styled.p`
    font-size: 15px;
    margin-bottom: 8px;

    @media (max-width: 768px) {
        font-size: 13px; // 모바일에서 텍스트 크기 줄이기
    }
`;

const Slogan = styled.p`
    font-size: 25px;
    font-style: italic;
    margin-bottom: 16px;

    @media (max-width: 768px) {
        font-size: 18px; // 모바일에서 텍스트 크기 줄이기
    }
`;

const Overview = styled.p`
    font-size: 13px;
    margin-top: 16px;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 12px; // 모바일에서 텍스트 크기 줄이기
    }
`;
