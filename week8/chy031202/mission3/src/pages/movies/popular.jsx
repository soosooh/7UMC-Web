import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import axios from "axios";
import ListData from '../../components/movielist.jsx';
import { axiosInstance } from '../../apis/axios~instance.js';
import useCustomFetch from '../../hooks/useQuery.js';
import { useQuery ,  useInfiniteQuery} from '@tanstack/react-query';
import SckeletonWrapper from '../../components/skeletons/sckeletonWrapper.jsx';
import Pagination from '../../components/pageButton.jsx';

const fetchMovies = async (page) => {
    const response = await axiosInstance.get(`/movie/now_playing?language=ko-KR&page=${page}`);
    return response.data;
};

const PopularComponent = () => {
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
;

    console.log("Fetched data in Play:",movies);

    if (isLoading) {
        return (<SckeletonWrapper/>)

    }
    if(isError) {
        return(<div style={{color:'white'}}>에러!</div>)
    }


    const allMovies = movies?.results || [];
    return ( 
        <Wrapp>
            <ScrollableList>
                <ListData movies={allMovies} />
            </ScrollableList>
            <Pagination
                currentPage={currentPage}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
                maxPage={4} // 페이지의 최대값을 설정
            />
        </Wrapp>
    );
}

const Wrapp = styled.div `
display: flex;
    flex-direction: column; /* 세로 정렬 */
    align-items: center; /* 가로 가운데 정렬 */
    height: 100vh; /* 화면 전체 높이 */
    
    
`


const ScrollableList = styled.div`
    
    flex-grow: 1;
    width: 100%;
    max-height:80%;
    overflow-y: auto; /* 세로 스크롤 */
`;

export default PopularComponent;
