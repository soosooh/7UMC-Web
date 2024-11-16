// MovieDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetchMovieDetail from '../hooks/useFetchMovies';
import Banner from '../components/Banner';
import CastList from '../components/list/CaseList';

const MovieDetail = () => {
    const { movieId } = useParams();
    const { movie, credits, loading, error } = useFetchMovieDetail(movieId);

    if (loading) return <LoadingMessage>로딩 중...</LoadingMessage>;
    if (error) return <ErrorMessage>Error: {error}</ErrorMessage>;

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
