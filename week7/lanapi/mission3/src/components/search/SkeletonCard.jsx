import React from 'react';
import styled from 'styled-components';

const SkeletonCard = () => {
    return (
        <SkeletonWrapper>
            <SkeletonPoster />
            <SkeletonInfo>
                <SkeletonTitle />
                <SkeletonDate />
            </SkeletonInfo>
        </SkeletonWrapper>
    );
};

export default SkeletonCard;

const SkeletonWrapper = styled.div`
    width: 170.65px;
    height: 260px;
    border-radius: 10px 0px 0px 0px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e0e0e0;

    @media (max-width: 1024px) {
        width: 160px;  /* 태블릿 화면에서 크기 조정 */
    }

    @media (max-width: 768px) {
        width: 140px;  /* 모바일 화면에서 크기 조정 */
        height: 220px; /* 모바일 화면에서 높이 조정 */
    }

    @media (max-width: 480px) {
        width: 120px;  /* 더 작은 화면에서 크기 축소 */
        height: 180px; /* 더 작은 화면에서 높이 축소 */
    }
`;

const SkeletonPoster = styled.div`
    width: 100%;
    height: 231.56px;
    background-color: #ccc;

    @media (max-width: 768px) {
        height: 180px;  /* 모바일 화면에서 포스터 크기 줄이기 */
    }

    @media (max-width: 480px) {
        height: 140px;  /* 더 작은 화면에서 포스터 크기 더 줄이기 */
    }
`;

const SkeletonInfo = styled.div`
    width: 100%;
    padding: 10px;
    text-align: left;
`;

const SkeletonTitle = styled.div`
    width: 70%;
    height: 14px;
    background-color: #b0b0b0;
    margin-bottom: 8px;

    @media (max-width: 768px) {
        width: 60%;  /* 모바일 화면에서 제목 크기 줄이기 */
    }

    @media (max-width: 480px) {
        width: 50%;  /* 더 작은 화면에서 제목 크기 더 줄이기 */
    }
`;

const SkeletonDate = styled.div`
    width: 50%;
    height: 12px;
    background-color: #b0b0b0;

    @media (max-width: 768px) {
        width: 40%;  /* 모바일 화면에서 날짜 크기 줄이기 */
    }

    @media (max-width: 480px) {
        width: 30%;  /* 더 작은 화면에서 날짜 크기 더 줄이기 */
    }
`;



// import React from 'react';
// import styled from 'styled-components';

// const SkeletonCard = () => {
//     return (
//         <SkeletonWrapper>
//             <SkeletonPoster />
//             <SkeletonInfo>
//                 <SkeletonTitle />
//                 <SkeletonDate />
//             </SkeletonInfo>
//         </SkeletonWrapper>
//     );
// };

// export default SkeletonCard;

// const SkeletonWrapper = styled.div`
//     width: 170.65px;
//     height: 260px;
//     border-radius: 10px 0px 0px 0px;
//     overflow: hidden;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: #e0e0e0;
// `;

// const SkeletonPoster = styled.div`
//     width: 100%;
//     height: 231.56px;
//     background-color: #ccc;
// `;

// const SkeletonInfo = styled.div`
//     width: 100%;
//     padding: 10px;
//     text-align: left;
// `;

// const SkeletonTitle = styled.div`
//     width: 70%;
//     height: 14px;
//     background-color: #b0b0b0;
//     margin-bottom: 8px;
// `;

// const SkeletonDate = styled.div`
//     width: 50%;
//     height: 12px;
//     background-color: #b0b0b0;
// `;
