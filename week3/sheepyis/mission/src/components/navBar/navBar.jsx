import styled from "styled-components";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.navBackground};
`

const NavP = styled(Link)`
    color: ${colors.main};
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: ${colors.black};
    }
`

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`

const SignButton = styled(Link)`
    padding: 0.5rem;
    color: ${colors.white};
    font-size: 1.4rem;
    font-weight: bold;
    border: none;
    border-radius: 0.5vw;
    cursor: pointer;

    &:hover {
        color: ${colors.black};
    }
`

const SignButton2 = styled(SignButton)`
    background-color: ${colors.signBackground};
`

const NavBar = () => {
    return (
        <div className="pageContainer">
            <NavBarContainer>
                <NavP to="/">YONGCHA</NavP>
                <RightContainer>
                    <SignButton to="/login">로그인</SignButton>
                    <SignButton2 to="signup">회원가입</SignButton2>
                </RightContainer>
            </NavBarContainer>
        </div>
    )
}

export default NavBar;