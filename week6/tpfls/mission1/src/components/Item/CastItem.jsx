// CastItem.jsx
import React from 'react';
import styled from 'styled-components';

const CastItem = ({ name, profilePath }) => (
    <CastCard>
        <CastImage src={`https://image.tmdb.org/t/p/w200${profilePath}`} alt={name} />
        <CastName>{name}</CastName>
    </CastCard>
);

const CastCard = styled.div`
    text-align: center;
`;

const CastImage = styled.img`
    width: 100%;
    border-radius: 50%;
`;

const CastName = styled.p`
    margin-top: 5px;
    font-size: 0.9rem;
`;

export default CastItem;
