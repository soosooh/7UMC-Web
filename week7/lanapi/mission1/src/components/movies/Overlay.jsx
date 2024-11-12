// Overlay.jsx
import React from 'react';
import styled from 'styled-components';

const Overlay = ({ title, overview }) => {
    return (
        <OverlayContainer>
            <OverlayTitle>{title}</OverlayTitle>
            <OverlayOverview>{overview}</OverlayOverview>
        </OverlayContainer>
    );
};

export default Overlay;

const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    opacity: 0; /* 기본적으로 숨김 상태 */
    transition: opacity 0.3s ease-in-out;
    
    &:hover {
        opacity: 1; /* hover 시 표시 */
    }
`;

const OverlayTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
`;

const OverlayOverview = styled.p`
    font-size: 14px;
    text-align: center;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
`;


// // Overlay.jsx
// import React from 'react';
// import styled from 'styled-components';

// const Overlay = ({ title, overview }) => {
//     return (
//         <OverlayContainer>
//             <OverlayTitle>{title}</OverlayTitle>
//             <OverlayOverview>{overview}</OverlayOverview>
//         </OverlayContainer>
//     );
// };

// export default Overlay;

// const OverlayContainer = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.8);
//     color: white;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 10px;
//     border-radius: 10px;
//     opacity: 1;
//     transition: opacity 0.3s ease-in-out;
// `;

// const OverlayTitle = styled.h3`
//     font-size: 18px;
//     margin-bottom: 10px;
//     text-align: center;
// `;

// const OverlayOverview = styled.p`
//     font-size: 14px;
//     text-align: center;
//     line-height: 1.4;
//     display: -webkit-box;
//     -webkit-line-clamp: 5; 
//     -webkit-box-orient: vertical;
//     white-space: normal;
//     text-overflow: ellipsis;
// `;