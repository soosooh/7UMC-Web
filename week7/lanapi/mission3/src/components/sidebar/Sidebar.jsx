import styled from "styled-components";
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { PiFilmSlateFill } from "react-icons/pi";

const Sidebar = () => {
    return (
        <SideContainer>
            <StyledRouterLink to='/search'>
                <SidebarDiv>
                    <IconSpan><IoSearch /></IconSpan>
                    찾기
                </SidebarDiv>
            </StyledRouterLink>
            <StyledRouterLink to='/movies'>
                <SidebarDiv>
                    <IconSpan><PiFilmSlateFill /></IconSpan>
                    영화
                </SidebarDiv>
            </StyledRouterLink>
        </SideContainer>
    )
}

export default Sidebar;

const SideContainer = styled.div`
    background-color: black;
    width: 60px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`

const SidebarDiv = styled.div`
    color: white;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 7px;
    cursor: pointer;
    &:hover {
        background-color: rgba(80, 80, 80, 1);
    };
    border-radius: 10px;
`

const IconSpan = styled.span`
    margin-right: 2px;
    margin-top: 2px;
`

const StyledRouterLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    margin: 5px;
`