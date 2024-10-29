import React, { useEffect, useState } from 'react';

import axios from "axios";
import ListData from '../../components/movielist.jsx';
import { axiosInstance } from '../../apis/axios~instance.js';
import useCustomFetch from '../../hooks/useCustomFetch.js';

const PalyingComponent = () => {
    //const [movies, setMovies] = useState({ results: [] });
    const {data:movies, isLoading, isError} = useCustomFetch(`/movie/now_playing?language=ko-KR&page=1`);

    if (isLoading) {
        return (<div style={{color:'white'}}>로딩중입니다</div>)
    }
    if(isError) {
        return(<div style={{color:'white'}}>에러!</div>)
    }
    return ( 
        <div>
            <ListData movies = {movies}/>
        </div>  
    );
}

export default PalyingComponent ;
