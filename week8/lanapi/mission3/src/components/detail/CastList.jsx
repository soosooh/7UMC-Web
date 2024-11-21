import styled from 'styled-components';
import CastItem from './CastItem';

const CastList = ({ director, cast }) => (
    <>
        <CastTitle>Directed by / Starring</CastTitle>
        <CreditWrapper>
            {director && (
                <CastItem
                    key={director.id}
                    name={director.name}
                    role="감독"
                    image={director.profile_path}
                />
            )}
            {cast.map(actor => (
                <CastItem
                    key={actor.cast_id}
                    name={actor.name}
                    role={actor.character}
                    image={actor.profile_path}
                />
            ))}
        </CreditWrapper>
    </>
);

export default CastList;

const CastTitle = styled.h2`
    font-size: 40px;
    margin: 40px 0;
    text-align: left;
    color: white;
    font-family: 'Georgia', serif;

    @media (max-width: 768px) {
        font-size: 30px; 
    }
`;

const CreditWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    gap: 20px;
    justify-content: flex-start;

    @media (max-width: 1024px) {
        gap: 15px; 
    }

    @media (max-width: 768px) {
        gap: 10px; 
    }

    @media (max-width: 480px) {
        gap: 5px; 
    }
`;
