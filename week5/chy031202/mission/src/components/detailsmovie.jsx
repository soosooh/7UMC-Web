import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import useCustomFetch from "../hooks/useCustomFetch";
import { useParams } from "react-router-dom";

const DetailMovie = ({ movie, credits }) => {
    if (!movie || !movie.data || !credits || !credits.data) {
        return <p>Loading...</p>; // movie가 null 또는 undefined일 경우 로딩 메시지 표시
    }
    const { movieId } = useParams();
    //const { data: credits, isLoading: creditsLoading, isError: creditsError } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);

    const director = credits.crew ? credits.crew.find(member => member.job === "Director") : null;

    console.log("Movie data:", movie);
    console.log("Director:", credits);
    console.log("Credits data:", credits);
    return (
        <>
        <Intro bgimage={`https://image.tmdb.org/t/p/w500${movie.data.backdrop_path}`}>
        <h1>{movie.data.title}</h1>
            <p>평균 {movie.data.vote_average}
                <br />{movie.data.release_date}
                <br/> {movie.data.runtime} 분 
                <br></br><br></br>
                <OVVW>
                    {movie.data.overview}
                </OVVW>
            </p>
        </Intro>
        <Credits>
            {credits.data.cast && credits.data.cast.map((credit) => (
                <CreList key={credit.cast_id}>
                    <Portrait src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`} alt={credit.name} />
                    <p><strong>{credit.name}</strong></p>
                    <p style={{color:'gray'}}>{credit.character}</p>
                </CreList>
            ))}
        </Credits>
        
            
        </>
    );
}

export default DetailMovie;

const Intro = styled.article `
padding:20px;
background-image: url(${props => props.bgimage});
background-size: cover;
background-position: center;
/* banner */

width:auto;
height: 335px;
left: 211px;
top: 72px;

border-radius: 10px;

&::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
        z-index: -1; // Ensure the overlay is behind the content
    }

`

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