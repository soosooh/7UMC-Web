import styled from 'styled-components';

const CastItem = ({ name, role, image }) => (
    <CreditItem>
        <CreditImage src={`https://image.tmdb.org/t/p/w500${image}`} alt={name} />
        <CreditName>{name}</CreditName>
        <CreditRole>{role}</CreditRole>
    </CreditItem>
);

export default CastItem;

const CreditItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(10% - 40px);
    flex-basis: calc(10% - 40px);

    @media (max-width: 1024px) {
        width: calc(20% - 40px); 
    }

    @media (max-width: 768px) {
        width: calc(33.33% - 40px); 
    }

    @media (max-width: 480px) {
        width: calc(50% - 40px); 
    }
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

    @media (max-width: 768px) {
        width: 100px;
        height: 100px; 
    }

    @media (max-width: 480px) {
        width: 80px;
        height: 80px; 
    }
`;

const CreditName = styled.p`
    font-size: 14px;
    color: white;
    margin: 5px 0 3px 0;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 12px; 
    }
`;

const CreditRole = styled.p`
    font-size: 12px;
    color: #ccc;
    margin: 0;
    text-align: center;
    font-style: italic;

    @media (max-width: 768px) {
        font-size: 10px; 
    }
`;

