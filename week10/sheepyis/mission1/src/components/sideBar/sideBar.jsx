import styled from "styled-components";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SideBarContainer = styled.div`
    width: 20%;
    padding: 1rem;
    min-height: calc(100vh - 5rem);
    background-color: ${colors.navBackground};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const CategoryContainer = styled(Link)`
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;

    &:hover {
        color: ${colors.black};
    }
`

const SideP = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
`

const SideBar = () => {
    return (
        <SideBarContainer>
            <CategoryContainer to="search">
                <FaSearch />
                <SideP>찾기</SideP>
            </CategoryContainer>
            <CategoryContainer to="movies">
                <FaSearch />
                <SideP>영화</SideP>
            </CategoryContainer>
            <CategoryContainer to="map">
                <FaSearch />
                <SideP>지도</SideP>
            </CategoryContainer>
        </SideBarContainer>
    )
}

export default SideBar;