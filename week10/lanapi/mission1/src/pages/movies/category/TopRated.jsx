import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CategoryList from '../../../components/category/CategoryList';
import CategoryCardSkeleton from '../../../components/category/CategoryCardSkeleton';
import Pagination from '../../../components/pagination/pagination'; 
import styled from 'styled-components';

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

const TopRated = () => {
    const [currentPage, setCurrentPage] = useState(1); 
    const { data, isLoading, isError } = useQuery({
        queryKey: ['category', 'top_rated', currentPage],
        queryFn: () => fetchCategoryMovies('top_rated', currentPage),
        keepPreviousData: true,
    });

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

export default TopRated;

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