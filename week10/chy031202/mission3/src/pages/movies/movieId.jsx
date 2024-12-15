import DetailMovie from "../../components/details/detailsmovie.jsx";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { movieApi } from "../../apis/axios~instance.js";

const MovieID = () => {
    const { movieId } = useParams();
    //const {data:movie, isLoading, isError} = useCustomFetch(`/movie/${movieId}?language=ko-KR`);
    const {data:movie, isLoading: isMovieLoading, isError: isMovieError} = useQuery({
        queryKey: ['MovieID', movieId],
        queryFn: async () => {
            const response = await axiosInstance.get(`/movie/${movieId}?language=ko-KR`);
            return response.data;
        }
    });


    //const { data: credits,  creditsLoading, creditsError } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);
    const {data:credits, isLoading: isCreditsLoading, isError: isCreditsError } = useQuery({
        queryKey: ['MovieCredits', movieId],
        queryFn: async() => {
            const response = await axiosInstance.get(`/movie/${movieId}/credits?language=ko-KR`);
            return response.data;
        }
    })

    console.log(movieId, "받아오는지확인");
    // 로딩 및 에러 처리
    if (isMovieLoading || isCreditsLoading) {
        return <div style={{color: 'white'}}>로딩중입니다</div>;
    }
    if (isMovieError || isCreditsError) {
        return <div style={{color: 'white'}}>에러!</div>;
    }

    
return(
    <>
    
            {/* movie 데이터가 있을 때만 DetailMovie로 전달 */}
            {movie && credits && <DetailMovie movie={movie} credits={credits}/>}
    </>
    )
}

export default MovieID;