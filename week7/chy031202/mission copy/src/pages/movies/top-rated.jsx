import React, { useRef, useEffect, useState } from 'react';

import axios from "axios";
import ListData from '../../components/movielist.jsx';
import { axiosInstance } from '../../apis/axios~instance.js';
import useCustomFetch from '../../hooks/useQuery.js';
import { useQuery , useInfiniteQuery} from '@tanstack/react-query';
import SckeletonWrapper from '../../components/skeletons/sckeletonWrapper.jsx';

const fetchMovies = async ({ pageParam = 1 }) => {
    const response = await axiosInstance.get(`/movie/now_playing?language=ko-KR&page=${pageParam}`);
    return response.data;
};
const TopRated = () => {
    const loadMoreRef = useRef();
    
    const { data: movies, isLoading, isError ,fetchNextPage, hasNextPage,isFetchingNextPage, } = useInfiniteQuery({
        queryKey: ['nowPlayingMovies'], // 쿼리 키 설정
        queryFn: fetchMovies,  
        getNextPageParam: (lastPage, allPages) =>
        {
            return allPages.length < 4 ? allPages.length + 1 : undefined;
        },
        retry: false, 
    });

    useEffect(() => {
        if (!hasNextPage) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchNextPage();
                }
            },
            { threshold: 1.0 }
        );

        
        if (loadMoreRef.current) observer.observe(loadMoreRef.current);

        return () => {
            if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
        };
    }, [hasNextPage, fetchNextPage]);

    if (isLoading) {
        return (<SckeletonWrapper/>)
    }
    if(isError) {
        return(<div style={{color:'white'}}>에러!</div>)
    }

    const allMovies = movies.pages.flatMap(page => page.results);
    return ( 
        <div>
            <ListData movies={allMovies} />
            {hasNextPage && (
                <div ref={loadMoreRef} style={{ height: '50px', textAlign: 'center' }}>
                    {isFetchingNextPage && <SckeletonWrapper />}
                </div>
            )}
        </div>
    );
}

export default TopRated;
