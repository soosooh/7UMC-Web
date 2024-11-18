import React, { useRef,useEffect, useState } from 'react';
import ListData from '../../components/movielist.jsx';
import { axiosInstance } from '../../apis/axios~instance.js';
import useCustomFetch from '../../hooks/useQuery.js';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import SckeletonWrapper from '../../components/skeletons/sckeletonWrapper.jsx';

const fetchMovies = async ({ pageParam = 1 }) => {
    const response = await axiosInstance.get(`/movie/now_playing?language=ko-KR&page=${pageParam}`);
    return response.data;
};

const PalyingComponent = () => {
    const loadMoreRef = useRef();
    
    const {
        data: movies,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['nowPlayingMovies'],
        queryFn: fetchMovies,
        getNextPageParam: (lastPage) => {
            return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
        },
        retry: false,
    });

    useEffect(() => {
        if (!hasNextPage) return;
    
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 0.5 }
        );
    
        if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    
        return () => {
            if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
        };
    }, [hasNextPage, fetchNextPage, isFetchingNextPage]);


    console.log("Fetched data in Play:",movies);
    if (isLoading) {
        return (<SckeletonWrapper/>)
    }
    if(isError) {
        return(<div style={{color:'white'}}>에러!</div>)
    }
    const allMovies = movies.pages.flatMap(page => page.results);
    return ( 
        <ScrollableContainer>

            <ListData movies={allMovies} />
            {hasNextPage && (
                <div ref={loadMoreRef} style={{ height: '50px', textAlign: 'center', color: 'white', padding: '10px' }}>
                {isFetchingNextPage ? <SckeletonWrapper/> : ''}
            </div>
            )}
        </ScrollableContainer>
    );
}



const ScrollableContainer = styled.div`
    max-height: 80vh; /* 필요한 경우 높이 조절 */
    overflow-y: auto;
    display:flex;
    flex-direction: column;
`;

const PageButton = styled.button `
width: 70px;
height: 35px;
left: 935px;
top: 991px;

background: #FF073D;
border-radius: 10px;
color:white;
`


export default PalyingComponent ;
