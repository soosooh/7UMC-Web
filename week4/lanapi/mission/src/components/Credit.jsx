import styled from 'styled-components';

const Credit = ({ credits }) => {
    return (
        <Actors>
            <Title>감독 / 출연진</Title>
            <People>
                {credits && credits.cast.slice(0, 10).map((person) => (
                    <Person key={person.cast_id}>
                        <PersonImage 
                            src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} 
                            alt={person.name} 
                        />
                        <PersonName>{person.name}</PersonName>
                        <PersonRole>{person.character}</PersonRole>
                    </Person>
                ))}
            </People>
        </Actors>
    );
};

export default Credit;

const Actors = styled.div`
    padding: 20px 0;
`;

const Title = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
`;

const People = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const Person = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100px;
`;

const PersonImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
`;

const PersonName = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
`;

const PersonRole = styled.p`
    font-size: 12px;
    color: gray;
`;
