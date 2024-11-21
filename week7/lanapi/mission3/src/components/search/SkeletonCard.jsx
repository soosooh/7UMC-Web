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
        width: 160px;  
    }

    @media (max-width: 768px) {
        width: 140px;  
        height: 220px; 
    }

    @media (max-width: 480px) {
        width: 120px;  
        height: 180px; 
    }
`;

const SkeletonPoster = styled.div`
    width: 100%;
    height: 231.56px;
    background-color: #ccc;

    @media (max-width: 768px) {
        height: 180px;  
    }

    @media (max-width: 480px) {
        height: 140px;  
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
        width: 60%;  
    }

    @media (max-width: 480px) {
        width: 50%;  
    }
`;

const SkeletonDate = styled.div`
    width: 50%;
    height: 12px;
    background-color: #b0b0b0;

    @media (max-width: 768px) {
        width: 40%; 
    }

    @media (max-width: 480px) {
        width: 30%;  
    }
`;
