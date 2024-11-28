import styled from "styled-components";
import colors from "../../styles/colors";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../../features/cart/cartSlice";

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1vw;
`

const PosterImg = styled.img`
    width: 4vw;
    height: 4vw;
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2vw;
`

const ItemP = styled.p`
    font-size: 1vw;
    font-weight:  bold;
`

const ItemP2 = styled(ItemP)`
    font-size: 0.8vw;
    color: ${colors.playlist};
`

const ArrowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ArrowButton = styled.button`
    cursor: pointer;
    color: ${colors.headerBackground};
    font-size: 1vw;
`;


const ItemPlayList = ({ id, title, singer, img, price, amount }) => {
    const dispatch = useDispatch();

    return (
        <ItemContainer>
            <LeftContainer>
                <PosterImg src={img} alt="poster" />
                <RightContainer>
                    <ItemP>{title} | {singer}</ItemP>
                    <ItemP2>{price}</ItemP2>
                </RightContainer>
            </LeftContainer>

            <ArrowContainer>
                <ArrowButton onClick={() => dispatch(increase(id))}>^</ArrowButton>
                <ItemP>{amount}</ItemP>
                <ArrowButton onClick={() => {
                    if (amount == 1) {
                        dispatch(removeItem(id));
                        return;
                    }
                    dispatch(decrease(id));
                }}
                >v</ArrowButton>
            </ArrowContainer>
        </ItemContainer>
    )
}

export default ItemPlayList;