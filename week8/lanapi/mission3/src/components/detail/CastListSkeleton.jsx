import React from 'react';
import styled, { keyframes } from 'styled-components';

const CastListSkeleton = () => (
    <SkeletonWrapper>
        {[...Array(5)].map((_, index) => (
            <SkeletonCastItem key={index}>
                <SkeletonImage />
                <SkeletonName />
                <SkeletonRole />
            </SkeletonCastItem>
        ))}
    </SkeletonWrapper>
);

export default CastListSkeleton;

const loadingAnimation = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 200px 0;
    }
`;

const SkeletonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;

    @media (max-width: 1024px) {
        gap: 15px; // 태블릿 화면에서 간격 줄이기
    }

    @media (max-width: 768px) {
        gap: 10px; // 모바일 화면에서 간격 더 줄이기
    }

    @media (max-width: 480px) {
        gap: 5px; // 더 작은 화면에서는 간격 최소화
    }
`;

const SkeletonCastItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(20% - 20px);

    @media (max-width: 1024px) {
        width: calc(25% - 15px); 
    }

    @media (max-width: 768px) {
        width: calc(33.33% - 10px); 
    }

    @media (max-width: 480px) {
        width: calc(50% - 5px); 
    }
`;

const SkeletonImage = styled.div`
    width: 120px;
    height: 120px;
    background: linear-gradient(90deg, #444 25%, #555 50%, #444 75%);
    background-size: 400% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    border-radius: 50%;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        width: 100px;
        height: 100px; 
    }

    @media (max-width: 480px) {
        width: 80px;
        height: 80px; 
    }
`;

const SkeletonName = styled.div`
    width: 70%;
    height: 16px;
    background: linear-gradient(90deg, #444 25%, #555 50%, #444 75%);
    background-size: 400% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    border-radius: 4px;
    margin-bottom: 6px;

    @media (max-width: 768px) {
        width: 60%; 
    }

    @media (max-width: 480px) {
        width: 50%; 
    }
`;

const SkeletonRole = styled.div`
    width: 50%;
    height: 14px;
    background: linear-gradient(90deg, #444 25%, #555 50%, #444 75%);
    background-size: 400% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    border-radius: 4px;

    @media (max-width: 768px) {
        width: 45%; 
    }

    @media (max-width: 480px) {
        width: 40%; 
    }
`;

