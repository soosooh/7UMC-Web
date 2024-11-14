import styled from 'styled-components';

const CreditItemContainer = styled.div`
  text-align: center;
  width: 7.5rem;
  justify-content: center;
  
`
const CreditImage = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: gray;
  background-position: center;
  background-size: cover;
  background-image: ${({ profilePath }) => profilePath ? `url(${profilePath})` : 'none'};
`
const DetailP = styled.p`
  font-family: Inter;
  font-size: 1rem;
  font-weight: 700;
  line-height: 16.94px;
  white-space: normal;
`
const PersonP = styled(DetailP)`
  color: #ddd;
  font-size: 0.75rem;
  white-space: normal;
`

const CreditItem = ({ role, name, originalName, profilePath }) => {
  return (
    <CreditItemContainer>
      <CreditImage profilePath={profilePath} />
      <PersonP>{role}</PersonP>
      <DetailP>{name}</DetailP>
      <PersonP>{originalName}</PersonP>
    </CreditItemContainer>
  );
};

export default CreditItem;