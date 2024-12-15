import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Banner from "./banner";
import CastList from "./list";

const DetailMovie = ({ movie, credits }) => {
    if (!movie || !credits ) {
        return <p>Loading...</p>; // movie가 null 또는 undefined일 경우 로딩 메시지 표시
    }
    const { movieId } = useParams();
    //const { data: credits, isLoading: creditsLoading, isError: creditsError } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);

    const director = credits.crew ? credits.crew.find(member => member.job === "Director") : null;

    console.log("Movie data:", movie);
    console.log("Director:", director);
    console.log("Credits data:", credits);
    return (
        <Wrapp>
        <Banner movie={movie} />
        
        <CastList cast={credits.cast || []} />
        
            
        </Wrapp>
    );
}

const Wrapp=styled.main`
display:flex;
width:98%;
flex-direction:column;
`

export default DetailMovie;


const Credits = styled.ul `
list-style: none;


`

const CreList = styled.li `
width:130px;
height:176px;
position: relative;
float: left;
margin-right: 2vw;
    margin-bottom: 5vw;
`

const Portrait = styled.img`
width: 130px;
    height: 130px;

    border-radius: 50%; /* 원형 모양으로 만듦 */
    object-fit: cover; /* 이미지가 잘리지 않고 원에 맞도록 조절 */
    background-color: #e0e0e0;
    display: inline-block;
    min-width: 130px;
    min-height: 130px;
`

const OVVW = styled.div `
width : 500px;

`