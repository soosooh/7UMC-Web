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
    //console.log(movie.pages[0].credits.cast);

    const castMembers = movie.pages[0].credits.cast.map(castMember => ({
        name: castMember.name,
        profile_path: castMember.profile_path,
        known_for_department: castMember.known_for_department,
    }));

    return (
        <ListContainer>
            {castMembers.map((credits, index) => (
                <ItemCredit 
                    key={index}
                    name={credits.name}
                    profile_path={`https://image.tmdb.org/t/p/w500${credits.profile_path}`}
                    role={credits.known_for_department}
                />
            ))}
        </ListContainer>
    );
};

export default ListCredit;
