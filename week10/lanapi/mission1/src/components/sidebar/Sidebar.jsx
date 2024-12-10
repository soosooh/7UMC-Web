import styled from "styled-components";
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { PiFilmSlateFill } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa"; // 지도 아이콘 추가

const Sidebar = () => {
    return (
        <SideContainer>
            <StyledRouterLink to='/search'>
                <SidebarDiv>
                    <IconSpan><IoSearch /></IconSpan>
                    <Text>찾기</Text>
                </SidebarDiv>
            </StyledRouterLink>
            <StyledRouterLink to='/movies'>
                <SidebarDiv>
                    <IconSpan><PiFilmSlateFill /></IconSpan>
                    <Text>영화</Text>
                </SidebarDiv>
            </StyledRouterLink>
            <StyledRouterLink to='/maps'> {/* 지도 링크 추가 */}
                <SidebarDiv>
                    <IconSpan><FaMapMarkerAlt /></IconSpan> {/* 지도 아이콘 추가 */}
                    <Text>지도</Text>
                </SidebarDiv>
            </StyledRouterLink>
        </SideContainer>
    );
};

export default Sidebar;

const SideContainer = styled.div`
    background-color: black;
    width: 60px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    @media (max-width: 768px) {
        width: 100%; 
        height: 50px; 
        flex-direction: row; 
        align-items: center; 
        justify-content: space-around; 
        position: fixed; 
        bottom: 0; 
        left: 0;
        z-index: 10; 
    }
`;

const SidebarDiv = styled.div`
    color: white;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: 5px;
    cursor: pointer;

    &:hover {
        background-color: rgba(80, 80, 80, 1);
    }

    border-radius: 10px;

    @media (max-width: 768px) {
        height: auto; 
        flex-direction: column; 
        padding: 10px;
        font-size: 0.9rem; 
    }
`;

const IconSpan = styled.span`
    margin-right: 5px; 
    margin-top: 2px;

    @media (max-width: 768px) {
        margin-right: 0; 
        margin-bottom: 5px; 
    }
`;

const Text = styled.span`
    font-size: 1rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const StyledRouterLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    margin: 5px;

    @media (max-width: 768px) {
        margin: 0; 
    }
`;


// import styled from "styled-components";
// import { Link } from 'react-router-dom';
// import { IoSearch } from 'react-icons/io5';
// import { PiFilmSlateFill } from "react-icons/pi";

// const Sidebar = () => {
//     return (
//         <SideContainer>
//             <StyledRouterLink to='/search'>
//                 <SidebarDiv>
//                     <IconSpan><IoSearch /></IconSpan>
//                     <Text>찾기</Text>
//                 </SidebarDiv>
//             </StyledRouterLink>
//             <StyledRouterLink to='/movies'>
//                 <SidebarDiv>
//                     <IconSpan><PiFilmSlateFill /></IconSpan>
//                     <Text>영화</Text>
//                 </SidebarDiv>
//             </StyledRouterLink>
//         </SideContainer>
//     );
// };

// export default Sidebar;

// const SideContainer = styled.div`
//     background-color: black;
//     width: 60px;
//     display: flex;
//     flex-direction: column;
//     flex-shrink: 0;

//     @media (max-width: 768px) {
//         width: 100%; 
//         height: 50px; 
//         flex-direction: row; 
//         align-items: center; 
//         justify-content: space-around; 
//         position: fixed; 
//         bottom: 0; 
//         left: 0;
//         z-index: 10; 
//     }
// `;

// const SidebarDiv = styled.div`
//     color: white;
//     height: 70px;
//     display: flex;
//     align-items: center;
//     justify-content: center; 
//     padding: 5px;
//     cursor: pointer;

//     &:hover {
//         background-color: rgba(80, 80, 80, 1);
//     }

//     border-radius: 10px;

//     @media (max-width: 768px) {
//         height: auto; 
//         flex-direction: column; 
//         padding: 10px;
//         font-size: 0.9rem; 
//     }
// `;

// const IconSpan = styled.span`
//     margin-right: 5px; 
//     margin-top: 2px;

//     @media (max-width: 768px) {
//         margin-right: 0; 
//         margin-bottom: 5px; 
//     }
// `;

// const Text = styled.span`
//     font-size: 1rem;
//     font-weight: bold;

//     @media (max-width: 768px) {
//         font-size: 0.8rem;
//     }
// `;

// const StyledRouterLink = styled(Link)`
//     text-decoration: none;
//     color: inherit;
//     margin: 5px;

//     @media (max-width: 768px) {
//         margin: 0; 
//     }
// `;

