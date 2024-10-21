import styled from "styled-components";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

const ItemContainer = styled(Link)`
    width: 100%;
    height: 8vw;
    background-image: ${({ background }) => `url(${background})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    border-radius: 0.5vw;
    position: relative;
    cursor: pointer;
`

const NameContainer = styled.div`
    position: absolute;
    bottom: 0;
    margin: 0 0.3vw 0.3vw;
    background-color: ${colors.black};
    padding: 0.5vw 1vw;
    opacity: 0.8;
    border: none;
    border-radius: 0.5vw;
`

const ItemP = styled.p`
    font-weight: bold;
    font-size: 1vw;
`

const ItemCategory = ({ name, link, background }) => {
    return (
        <ItemContainer to={link} background={background}>
            <NameContainer>
                <ItemP>{name}</ItemP>
            </NameContainer>
        </ItemContainer>
    )
}

export default ItemCategory;