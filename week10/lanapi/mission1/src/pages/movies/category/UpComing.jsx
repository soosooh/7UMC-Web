import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CategoryList from '../../../components/category/CategoryList';
import CategoryCardSkeleton from '../../../components/category/CategoryCardSkeleton';
import Pagination from '../../../components/pagination/pagination'; 
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

const UpComing = () => {
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

    // useQuery로 데이터 로드
    const { data, isLoading, isError } = useQuery({
        queryKey: ['category', 'upcoming', currentPage],
        queryFn: () => fetchCategoryMovies('upcoming', currentPage),
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

export default UpComing;

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