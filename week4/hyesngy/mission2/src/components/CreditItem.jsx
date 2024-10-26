import styled from 'styled-components';

const CreditItemContainer = styled.div`
  text-align: center;
`
const CreditImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  object-fit: cover;
`
const DetailP = styled.p`
  font-family: Inter;
  font-size: 1rem;
  font-weight: 700;
  line-height: 16.94px;
`
const PersonP = styled(DetailP)`
  color: #ddd;
  font-size: 0.75rem;
`

const CreditItem = ({ role, name, originalName, profilePath }) => {
    return (
        <CreditItemContainer>
            <CreditImage
                src={`https://image.tmdb.org/t/p/w185${profilePath}`}
                alt={name}
            />
            <PersonP>{role}</PersonP>
            <DetailP>{name}</DetailP>
            <PersonP>{originalName}</PersonP>
        </CreditItemContainer>
    );
};

export default CreditItem;