// MovieDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { fetchMovieDetail, fetchMovieCredits } from '../api/movie'; // API 함수 import
import Banner from '../components/Banner';
import CastList from '../components/list/CaseList'; // CastList import
import Skeleton from 'react-loading-skeleton'; // 스켈레톤 UI 라이브러리

const MovieDetail = () => {
    const { movieId } = useParams();

    // 영화 상세 정보 가져오기
    const { data: movie, isLoading: isLoadingMovie, isError: isErrorMovie } = useQuery(['movieDetail', movieId], () => fetchMovieDetail(movieId));

    // 출연진 정보 가져오기
    const { data: credits, isLoading: isLoadingCredits, isError: isErrorCredits } = useQuery(['movieCredits', movieId], () => fetchMovieCredits(movieId));

    if (isLoadingMovie || isLoadingCredits) return <LoadingMessage>로딩 중...</LoadingMessage>;
    if (isErrorMovie) return <ErrorMessage>Error: 영화 정보를 불러오는 데 문제가 발생했습니다.</ErrorMessage>;
    if (isErrorCredits) return <ErrorMessage>Error: 출연진 정보를 불러오는 데 문제가 발생했습니다.</ErrorMessage>;

    return (
        <DetailContainer>
            {movie && <Banner movie={movie} />}
            {credits && <CastList credits={credits} />}
        </DetailContainer>
    );
};

const DetailContainer = styled.div`
    color: white;
`;

const LoadingMessage = styled.p`
    text-align: center;
    color: white;
`;

const ErrorMessage = styled.p`
    text-align: center;
    color: red;
`;

export default MovieDetail;
