import styled from "styled-components";
import colors from "../../styles/colors";

const HeaderContainer = styled.div`
    width: 100%;
    margin: 6.45vw 0 1.85vw 0;
    display: flex;
    justify-content: center;
`

const HeaderP = styled.p`
    font-size: 3.2rem;
    font-weight: bold;
    color: ${colors.black};
`

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderP>⚡ UMC ToDoList ⚡</HeaderP>
        </HeaderContainer>
    )
}

export default Header;