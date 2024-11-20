import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from '../components/sidebar/Sidebar';
import styled from "styled-components";

const RootLayout = () => {
    return (
        <ScrollDiv>
            <RootContainer>
                <Navbar />
                <MainContainer>
                    <Sidebar />
                    <OutletContainer>
                        <Outlet />
                    </OutletContainer>
                </MainContainer>
            </RootContainer>
        </ScrollDiv>
    );
};

export default RootLayout;

const RootContainer = styled.div`
    height: 100vh;
    min-width: 540px;
    overflow-x: hidden; // 가로 스크롤 방지

    @media (max-width: 768px) {
        min-width: 100%; // 작은 화면에서 최소 너비를 제거
    }
`;

const MainContainer = styled.div`
    background-color: rgb(28, 40, 51);
    height: auto;
    min-height: 100%;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column; // 작은 화면에서는 세로 레이아웃
    }
`;

const OutletContainer = styled.div`
    padding: 20px;
    flex-grow: 1; // Outlet 영역이 남은 공간을 채우도록 설정

    @media (max-width: 768px) {
        padding: 10px; // 작은 화면에서 패딩 조정
    }
`;

const ScrollDiv = styled.div`
    overflow-y: auto;
    overflow-x: hidden;  // 가로 스크롤 방지

    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.4);
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`;

// import React from 'react';
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/navbar/Navbar";
// import Sidebar from '../components/sidebar/Sidebar';
// import styled from "styled-components";


// const RootLayout = () => {
//     return (
//         <ScrollDiv>
//             <RootContainer>
//                 <Navbar />
//                 <MainContainer>
//                     <Sidebar />
//                     <OutletContainer>
//                         <Outlet />
//                     </OutletContainer>
//                 </MainContainer>
//             </RootContainer>
//         </ScrollDiv>
//     )
// };

// export default RootLayout;

// const RootContainer = styled.div`
//     height: 100vh;
//     min-width: 540px;
//     overflow-x: hidden; // 가로 스크롤 방지
// `

// const MainContainer = styled.div`
//     background-color: rgb(28, 40, 51);
//     height: auto;
//     min-height: 100%;
//     display: flex;
// `

// const OutletContainer = styled.div`
//     padding: 20px;
//     flex-grow: 1;  // Outlet 영역이 남은 공간을 채우도록 설정
// `

// const ScrollDiv = styled.div`
//     overflow-y: auto;
//     overflow-x: hidden;  // 가로 스크롤 방지

//     &::-webkit-scrollbar {
//         width: 8px;
//         height: 8px;
//         border-radius: 6px;
//     }

//     &::-webkit-scrollbar-track {
//         background: rgba(0, 0, 0, 0.4);
//     }

//     &::-webkit-scrollbar-thumb {
//         background: rgba(0, 0, 0, 0.3);
//         border-radius: 6px;
//     }
// `;
