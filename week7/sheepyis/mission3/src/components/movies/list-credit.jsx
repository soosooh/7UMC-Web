import styled from "styled-components";
import ItemCredit from "./item-credit";

const ListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    margin-top: 1vw;
    gap: 1vw;
`;

const ListCredit = ({ movie }) => {
    console.log(movie);

    const castCredits = movie.credits.cast.map(castMember => ({
        name: castMember.name,
        profile_path: castMember.profile_path,
        known_for_department: castMember.known_for_department,
    }));

    return (
        <ListContainer>
            {castCredits.map((castMember, index) => (
                <ItemCredit 
                    key={index}
                    name={castMember.name}
                    profile_path={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
                    role={castMember.known_for_department}
                />
            ))}
        </ListContainer>
    );
}

export default ListCredit;
