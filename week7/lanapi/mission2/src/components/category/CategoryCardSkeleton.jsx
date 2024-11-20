//반응형 1차 수정 완료

import React from 'react';
import styled, { keyframes } from 'styled-components';

const CategoryCardSkeleton = () => {
    return (
        <SkeletonContainer>
            <SkeletonImage />
            <SkeletonTitle />
        </SkeletonContainer>
    );
};

export default CategoryCardSkeleton;

const loading = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 200px 0;
    }
`;

const SkeletonContainer = styled.div`
    width: 300px;
    height: 200px;
    border-radius: 0.6em;
    overflow: hidden;
    background-color: #f0f0f0;
    position: relative;
    margin-bottom: 15px;
    transition: width 0.3s, height 0.3s;

    @media (max-width: 768px) {
        width: 90%; 
        height: 180px; 
        margin: 10px auto; 
    }

    @media (max-width: 480px) {
        height: 150px; 
    }
`;

const SkeletonImage = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 400% 100%;
    animation: ${loading} 1.5s infinite;
    border-radius: 0.6em;
`;

const SkeletonTitle = styled.div`
    position: absolute;
    bottom: 7px;
    left: 15px;
    width: 60%;
    height: 20px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 400% 100%;
    animation: ${loading} 1.5s infinite;
    border-radius: 0.3em;

    @media (max-width: 768px) {
        width: 50%; 
    }

    @media (max-width: 480px) {
        width: 40%; 
    }
`;
