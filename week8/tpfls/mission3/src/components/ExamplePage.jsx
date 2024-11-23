// src/components/ExamplePage.jsx
import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchNowPlayingMovies } from '../api/movie'; // API 호출 함수
import Pagination from './Pagination';
import MovieList from './MovieList'; // 영화 목록 컴포넌트
import Skeleton from 'react-loading-skeleton';

const ExamplePage = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const {
        data,
        isLoading,
        isError,
        hasNextPage,
    } = useInfiniteQuery(['nowPlayingMovies', currentPage], fetchNowPlayingMovies, {
        getNextPageParam: (lastPage) => {
            return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
        },
    });

    const totalPages = data ? data.pages[0].total_pages : 0;

    const handlePageChange = (newPage) => {
        if (newPage < 0 || newPage >= totalPages) return;
        setCurrentPage(newPage);
    };

    if (isLoading) return <Skeleton count={5} />;
    if (isError) return <div>Error: 데이터 로딩 중 문제가 발생했습니다.</div>;

    return (
        <>
            <MovieList movies={data.pages.flatMap(page => page.results)} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default ExamplePage;
