import React from 'react';
import styled from 'styled-components';
import CreditItem from '../CreditItem';

const CreditsSection = styled.div`
  margin: 40px;
`;

const CreditsTitle = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`;

const CreditsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 20px;
`;

const CreditsList = ({ credits }) => {
  return (
    <CreditsSection>
      <CreditsTitle>감독/출연</CreditsTitle>
      <CreditsGrid>
        {credits?.cast?.map(person => (
          <CreditItem key={person.id} person={person} />
        ))}
      </CreditsGrid>
    </CreditsSection>
  );
};

export default CreditsList;