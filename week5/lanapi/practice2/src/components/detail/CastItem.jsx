import styled from 'styled-components';

const CastItem = ({ name, role, image }) => (
    <CreditItem>
        <CreditImage src={`https://image.tmdb.org/t/p/w500${image}`} alt={name} />
        <CreditName>{name}</CreditName>
        <CreditRole>{role}</CreditRole>
    </CreditItem>
);

const CreditItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(10% - 40px);
    flex-basis: calc(10% - 40px);
`;

const CreditImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    background-color: black;
    display: block;
    border: 2px solid white;
    margin-bottom: 10px;
`;

const CreditName = styled.p`
    font-size: 14px;
    color: white;
    margin: 5px 0 3px 0;
    text-align: center;
`;

const CreditRole = styled.p`
    font-size: 12px;
    color: #ccc;
    margin: 0;
    text-align: center;
    font-style: italic;
`;

export default CastItem;
