
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
`;

const SkeletonCastItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(20% - 20px);
`;

const SkeletonImage = styled.div`
    width: 120px;
    height: 120px;
    background: linear-gradient(90deg, #444 25%, #555 50%, #444 75%);
    background-size: 400% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    border-radius: 50%;
    margin-bottom: 10px;
`;

const SkeletonName = styled.div`
    width: 70%;
    height: 16px;
    background: linear-gradient(90deg, #444 25%, #555 50%, #444 75%);
    background-size: 400% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    border-radius: 4px;
    margin-bottom: 6px;
`;

const SkeletonRole = styled.div`
    width: 50%;
    height: 14px;
    background: linear-gradient(90deg, #444 25%, #555 50%, #444 75%);
    background-size: 400% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    border-radius: 4px;
`;
