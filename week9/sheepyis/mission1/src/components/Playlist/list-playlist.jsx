import ItemPlayList from "./item-playlist";
import { useSelector } from "react-redux";
import styled from "styled-components";
import colors from "../../styles/colors";

const ListContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 1vw;
`

const ListP = styled.p`
    font-size: 0.8vw;
    font-weight: bold;
    color: ${colors.headerBackground};
    text-align: center;
`

const ListPlayList = () => {
    const { cartItems } = useSelector((store) => store.cart);
    // console.log(state);

    return (
        <ListContainer>
            {cartItems.length === 0 ? (
                <ListP>고객님이 좋아하는 음반을 담아보세요~!</ListP>
            ) : (
                cartItems.map((item) => <ItemPlayList key={item.id} {...item} />)
            )}
        </ListContainer>
    )
}

export default ListPlayList;