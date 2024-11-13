
import React from 'react';
import styled, { keyframes } from 'styled-components';

const BannerSkeleton = () => (
    <SkeletonWrapper>
        <SkeletonOverlay>
            <SkeletonTitle />
            <SkeletonRate />
            <SkeletonSubtitle />
            <SkeletonOverview />
        </SkeletonOverlay>
    </SkeletonWrapper>
);

export default BannerSkeleton;

const loadingAnimation = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 200px 0;
    }
`;

const SkeletonWrapper = styled.div`
    width: 100vw;
    height: 500px;
    position: relative;
    background-color: #333;
    overflow: hidden;
`;

const SkeletonOverlay = styled.div`
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

const SkeletonTitle = styled.div`
    width: 70%;
    height: 40px;
    background: linear-gradient(90deg, #444 25%, #555 50%, #444 75%);
    background-size: 400% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    margin-bottom: 16px;
    border-radius: 4px;
`;

const SkeletonRate = styled.div`
    width: 50%;
    height: 20px;
    background: linear-gradient(90deg, #444 25%, #555 50%, #444 75%);
    background-size: 400% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    margin-bottom: 12px;
    border-radius: 4px;
`;

const SkeletonSubtitle = styled.div`
    width: 60%;
    height: 20px;
    background: linear-gradient(90deg, #444 25%, #555 50%, #444 75%);
    background-size: 400% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    margin-bottom: 12px;
    border-radius: 4px;
`;

const SkeletonOverview = styled.div`
    width: 80%;
    height: 100px;
    background: linear-gradient(90deg, #444 25%, #555 50%, #444 75%);
    background-size: 400% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    margin-top: 16px;
    border-radius: 4px;
`;
