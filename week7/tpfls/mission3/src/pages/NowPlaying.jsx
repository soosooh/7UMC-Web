import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { fetchNowPlayingMovies } from '../api/movie'; // API 호출 함수
import MovieList from '../components/list/MovieList';
import Pagination from '../components/Pagination';

const NowPlaying = () => {
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

    const { data, isLoading, isError, error } = useQuery(
        ['nowPlaying', currentPage], // queryKey에 currentPage 추가
        () => fetchNowPlayingMovies({ page: currentPage }), // API 호출
        {
            keepPreviousData: true, // 이전 데이터 유지
        }
    );

    const totalPages = data?.total_pages || 0; // API에서 총 페이지 수 가져오기

    const handlePageChange = (page) => {
        setCurrentPage(page); // 현재 페이지 업데이트
    };

    return (
        <Container>
            <Title>현재 상영중인 영화</Title>
            {isLoading && <LoadingMessage>로딩 중...</LoadingMessage>}
            {isError && <ErrorMessage>에러 발생: {error.message}</ErrorMessage>}
            {data && (
                <>
                    <MovieList movies={data.results} title="현재 상영중" />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            )}
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    padding: 20px;
    color: white;
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

const LoadingMessage = styled.p`
    color: white;
    text-align: center;
`;

const ErrorMessage = styled.p`
    color: red;
    text-align: center;
`;

export default NowPlaying;
