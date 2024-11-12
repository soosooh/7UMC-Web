import React, { useRef, useEffect, useState } from 'react';

import axios from "axios";
import ListData from '../../components/movielist.jsx';
import { axiosInstance } from '../../apis/axios~instance.js';
import useCustomFetch from '../../hooks/useQuery.js';
import { useQuery , useInfiniteQuery} from '@tanstack/react-query';
import SckeletonWrapper from '../../components/skeletons/sckeletonWrapper.jsx';
import Pagination from '../../components/pageButton.jsx';

const fetchMovies = async (page) => {
    const response = await axiosInstance.get(`/movie/now_playing?language=ko-KR&page=${page}`);
    return response.data;
};
const TopRated = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { data: movies, isLoading, isError } = useQuery({
        queryKey: ['nowPlayingMovies', currentPage],
        queryFn: () => fetchMovies(currentPage),
        keepPreviousData: true,
        retry: false
    });

    const handleNextPage = () => {
        if (currentPage < 4) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    if (isLoading) {
        return (<SckeletonWrapper/>)
    }
    if(isError) {
        return(<div style={{color:'white'}}>에러!</div>)
    }

    const allMovies = movies?.results || [];
    return ( 
        
        <div>
            <ListData movies={allMovies} />
            <Pagination
                currentPage={currentPage}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
                maxPage={4} // 페이지의 최대값을 설정
            />
        </div>
    );
}

export default TopRated;
