
import React from 'react';
import styled from 'styled-components';

const DetailBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    width: 194px; 
    height: 335px; 
    display: none; 
    z-index: 10; 
    overflow-y: auto; 
    padding: 10px; 
    box-sizing: border-box; 
    border-radius: 0px 0px 10px 10px;
`;

const Title = styled.h4`
    margin: 0;
    font-size: 16px;
    font-weight: bold;
`;

const Overview = styled.p`
    margin: 5px 0 0 0;
    font-size: 12px;
    line-height: 1.4;
`;

const MovieDetail = ({ title, overview, show }) => {
    return (
        <DetailBox style={{ display: show ? 'block' : 'none' }}>
            <Title>{title}</Title>
            <Overview>{overview}</Overview>
        </DetailBox>
    );
};

export default MovieDetail;
