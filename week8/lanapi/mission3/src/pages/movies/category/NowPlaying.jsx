//피드백
//미션1,2의 pages>movies>popular.jsx 를 포함한 대부분의 페이지가 useFetch로 수정하라고 했음에도 수정되어 있지 않아요. 
//로딩, 에러 처리가 되도록 import 해서 사용하는 방식으로 수정해서 코드 바꿔주세요!

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CategoryList from '../../../components/category/CategoryList';
import CategoryCardSkeleton from '../../../components/category/CategoryCardSkeleton';
import Pagination from '../../../components/pagination/pagination'; // 반응형 Pagination 컴포넌트
import styled from 'styled-components';

// API 요청 함수
const fetchCategoryMovies = async (category, page = 1) => {
    const token = `Bearer ${import.meta.env.VITE_API_TOKEN}`;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${category}`, {
        headers: {
            Authorization: token,
        },
        params: {
            language: 'ko',
            page: page,
        },
    });
    return response.data;
};

const NowPlaying = () => {
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

    // useQuery로 데이터 로드
    const { data, isLoading, isError } = useQuery({
        queryKey: ['category', 'now_playing', currentPage],
        queryFn: () => fetchCategoryMovies('now_playing', currentPage),
        keepPreviousData: true, // 이전 데이터를 유지
    });

    // 페이지 변경 핸들러
    const handleNextPage = () => {
        if (data?.total_pages && currentPage < data.total_pages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    if (isLoading) {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                <CategoryCardSkeleton />
                <CategoryCardSkeleton />
                <CategoryCardSkeleton />
            </div>
        );
    }

    if (isError) {
        return <div>데이터를 불러오는 데 실패했습니다.</div>;
    }

    return (
        <Container>
            <CategoryList moviesData={data.results} />

            <PaginationWrapper>
                <Pagination
                    page={currentPage}
                    handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage}
                />
            </PaginationWrapper>
        </Container>
    );
};

export default NowPlaying;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 20px;
    width: 100%;
`;

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center; 
    width: 100%;
    margin-top: 20px; 
`;
