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
    );
}

export default Sidebar;

const SideContainer = styled.div`
    background-color: black;
    width: 60px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    @media (max-width: 768px) {
        width: 100%; // 모바일에서는 가로로 확장
        height: 50px; // 높이를 줄여 가로로 배치
        flex-direction: row; // 가로로 변경
        align-items: center; // 요소를 중앙 정렬
        justify-content: center; // 요소 간격 조정
        position: fixed; // 네비게이션 바 아래 고정
        bottom: 0; // 화면 아래에 위치
        left: 0;
        z-index: 10; // 네비게이션 바 위에 배치
    }
`;

const SidebarDiv = styled.div`
    color: white;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center; // 텍스트와 아이콘을 중앙 정렬
    padding: 5px;
    cursor: pointer;

    &:hover {
        background-color: rgba(80, 80, 80, 1);
    }

    border-radius: 10px;

    @media (max-width: 768px) {
        height: auto; // 가로 사이즈에 맞게 높이 조정
        flex-direction: column; // 아이콘과 텍스트를 위아래로 배치
        padding: 10px;
        font-size: 0.8rem; // 텍스트 크기 줄이기
    }
`;

const IconSpan = styled.span`
    margin-right: 2px;
    margin-top: 2px;

    @media (max-width: 768px) {
        margin-right: 0; // 가로 모드에서는 오른쪽 여백 제거
        margin-bottom: 5px; // 텍스트와 아이콘 간 간격 추가
    }
`;

const StyledRouterLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    margin: 5px;

    @media (max-width: 768px) {
        margin: 0; // 가로 모드에서는 여백 제거
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
//                     찾기
//                 </SidebarDiv>
//             </StyledRouterLink>
//             <StyledRouterLink to='/movies'>
//                 <SidebarDiv>
//                     <IconSpan><PiFilmSlateFill /></IconSpan>
//                     영화
//                 </SidebarDiv>
//             </StyledRouterLink>
//         </SideContainer>
//     )
// }

// export default Sidebar;

// const SideContainer = styled.div`
//     background-color: black;
//     width: 60px;
//     display: flex;
//     flex-direction: column;
//     flex-shrink: 0;
// `

// const SidebarDiv = styled.div`
//     color: white;
//     height: 70px;
//     display: flex;
//     align-items: center;
//     padding-left: 7px;
//     cursor: pointer;
//     &:hover {
//         background-color: rgba(80, 80, 80, 1);
//     };
//     border-radius: 10px;
// `

// const IconSpan = styled.span`
//     margin-right: 2px;
//     margin-top: 2px;
// `

// const StyledRouterLink = styled(Link)`
//     text-decoration: none;
//     color: inherit;
//     margin: 5px;
// `