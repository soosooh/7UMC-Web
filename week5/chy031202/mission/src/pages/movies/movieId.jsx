import DetailMovie from "../../components/detailsmovie";
import React, { useEffect, useState } from 'react';
import useCustomFetch from '../../hooks/useCustomFetch.js';
import { useParams } from "react-router-dom";

const MovieID = () => {
    const { movieId } = useParams();
    const {data:movie, isLoading, isError} = useCustomFetch(`/movie/${movieId}?language=ko-KR`);
    const { data: credits,  creditsLoading, creditsError } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);
    console.log(movieId, "받아오는지확인");
    if (isLoading||creditsLoading) {
        return (<div style={{color:'white'}}>로딩중입니다</div>)
    }
    if(isError||creditsError) {
        return(<div style={{color:'white'}}>에러!</div>)
    }
return(
    <>
    
            {/* movie 데이터가 있을 때만 DetailMovie로 전달 */}
            {movie && credits && <DetailMovie movie={movie} credits={credits}/>}
    </>
    )
}

export default MovieID;