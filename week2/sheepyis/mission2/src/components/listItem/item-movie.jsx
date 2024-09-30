import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import OverView from "../overview/overview";

const ItemContainer = styled.div`
    width: 100%;
    height: 16vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;
`

const ImgContainer = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 0.5vw 0.5vw 0 0;
    background-color: ${colors.imageBackgroundColor};
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 0.5vw 0.5vw;
    width: 100%;
    padding: 1vw 0.5vw 1.5vw 0.5vw;
    height: auto;
    background-color: ${colors.itemBackgroundColor};
`

const MovieP = styled.p`
    color: ${colors.white};
    font-size: 0.6vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const ItemMovie = ({ id, image, title, vote_average, overview }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ItemContainer 
            key={id} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <ImgContainer src={image} alt="image"/>

            <TitleContainer>
                <MovieP>{title}</MovieP>
                <MovieP>{vote_average}</MovieP>
            </TitleContainer>

            {isHovered && <OverView title={title} overview={overview}/>}
        </ItemContainer>
    )
}

export default ItemMovie;