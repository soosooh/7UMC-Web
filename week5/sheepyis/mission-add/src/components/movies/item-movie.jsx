import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OverView from "./overview";

const ItemContainer = styled.div`
    width: 100%;
    height: 18vw;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
`

const ImageContainer = styled.img`
    border: none;
    border-radius: 0.5vw;
    width: 100%;
    height: 75%;
`

const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    padding-top: 0.5vw;
    width: 100%;
    height: 25%;
`

const ItemP = styled.p`
    font-weight: ${props => props.fontWeight || 'normal'};
    font-size: ${props => props.fontSize || '0.6vw'};
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;


const ItemMovie = ({ id, image, title, date, overview }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movies/${id}`);
    }

    return (
        <ItemContainer key={id} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleClick}>
            <ImageContainer src={image} alt="poster"/>
            <BottomContainer>
                <ItemP fontWeight={"bold"} fontSize={"0.8vw"}>{title}</ItemP>
                <ItemP>{date}</ItemP>
            </BottomContainer>

            {isHovered && <OverView title={title} overview={overview}/>}
        </ItemContainer>
    )
}

export default ItemMovie;