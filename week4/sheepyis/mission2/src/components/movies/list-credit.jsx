import styled from "styled-components";
import ItemCredit from "./item-credit";

const ListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    margin-top: 1rem;
    gap: 1rem;
`

const ListCredit = ({ movie }) => {
    console.log(movie);

    const combinedCredits = [
        ...movie.credits.cast.map(castMember => ({
            name: castMember.name,
            profile_path: castMember.profile_path,
            known_for_department: castMember.known_for_department,
        })),
        ...movie.credits.crew.map(crewMember => ({
            name: crewMember.name,
            profile_path: crewMember.profile_path,
            known_for_department: crewMember.known_for_department,
        }))
    ];

    return (
        <ListContainer>
            {combinedCredits.map((credits, index) => (
                <ItemCredit 
                    key={index}
                    name={credits.name}
                    profile_path={`https://image.tmdb.org/t/p/w500${credits.profile_path}`}
                    role={credits.known_for_department}
                />
            ))}
        </ListContainer>
    );
}

export default ListCredit;
