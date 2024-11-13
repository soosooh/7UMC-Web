import React, { useRef, useEffect } from 'react';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import CategoryList from '../../../components/category/CategoryList';
import CategoryCardSkeleton from '../../../components/category/CategoryCardSkeleton';
import LoadingSpinner from '../../../components/category/LoadingSpinner';

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

const TopRated = () => {
    const { data: initialData, isLoading: isInitialLoading, isError: isInitialError } = useQuery({
        queryKey: ['category', 'top_rated', 1],
        queryFn: () => fetchCategoryMovies('top_rated', 1),
    });

    const {
        data: moviesData,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['category', 'top_rated'],
        queryFn: ({ pageParam = 2 }) => fetchCategoryMovies('top_rated', pageParam),
        getNextPageParam: (lastPage, allPages) => {
            const maxPages = lastPage.total_pages;
            const nextPage = allPages.length + 1;
            return nextPage <= maxPages ? nextPage : undefined;
        },
        enabled: !!initialData,
    });

    const observerRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 1.0 }
        );

        if (observerRef.current) observer.observe(observerRef.current);
        return () => observerRef.current && observer.unobserve(observerRef.current);
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    if (isInitialLoading) {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                <CategoryCardSkeleton />
                <CategoryCardSkeleton />
                <CategoryCardSkeleton />
                <LoadingSpinner />
            </div>
        );
    }

    if (isInitialError) {
        return <div>데이터를 불러오는 데 실패했습니다.</div>;
    }

    return (
        <div>
            <CategoryList moviesData={[
                ...initialData.results,
                ...(moviesData?.pages.flatMap(page => page.results) || [])
            ]} />
            
            {isFetchingNextPage && <LoadingSpinner />}
            <div ref={observerRef} style={{ height: '20px' }} />
        </div>
    );
};

export default TopRated;
