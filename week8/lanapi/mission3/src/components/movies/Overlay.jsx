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
    opacity: 0; 
    transition: opacity 0.3s ease-in-out;

    &:hover {
        opacity: 1; 
    }

    @media (max-width: 768px) {
        padding: 8px;  
    }

    @media (max-width: 480px) {
        padding: 5px;  
    }
`;

const OverlayTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 16px; 
    }

    @media (max-width: 480px) {
        font-size: 14px; 
    }
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

    @media (max-width: 768px) {
        font-size: 12px; 
    }

    @media (max-width: 480px) {
        font-size: 10px; 
        -webkit-line-clamp: 3; 
    }
`;
