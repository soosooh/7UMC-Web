import React from 'react';
import styled from 'styled-components';

const CreditCard = styled.div`
  text-align: center;
  min-width: 80px;
`;

const CreditImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 8px;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center;
  background-color: #333;
`;

const CreditName = styled.p`
  color: white;
  font-size: 12px;
  margin-bottom: 4px;
`;

const CreditRole = styled.p`
  color: #888;
  font-size: 11px;
`;

const CreditItem = ({ person }) => {
  return (
    <CreditCard>
      <CreditImage 
        bgUrl={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
            : 'https://via.placeholder.com/200x200'
        }
      />
      <CreditName>{person.name}</CreditName>
      <CreditRole>{person.character}</CreditRole>
    </CreditCard>
  );
};

export default CreditItem;