// CastList.jsx
import React from 'react';
import styled from 'styled-components';
import CastItem from '../Item/CastItem';

const CastList = ({ credits }) => (
    <CastSection>
        <CastTitle>감독/출연</CastTitle>
        <CastGrid>
            {credits.crew.filter(member => member.job === 'Director').map(director => (
                <CastItem key={director.id} name={director.name} profilePath={director.profile_path} />
            ))}
            {credits.cast.slice(0, 10).map(actor => (
                <CastItem key={actor.id} name={actor.name} profilePath={actor.profile_path} />
            ))}
        </CastGrid>
    </CastSection>
);

const CastSection = styled.div`
    margin-top: 20px;
`;

const CastTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const CastGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
`;

export default CastList;
