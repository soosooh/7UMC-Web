import styled from "styled-components";
import ItemMovie from "../listItem/item-movie";

const ListContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1.5vw;
    margin: 2vw 0;
`;

const ListMovie = ({ data }) => {
    return (
        <ListContainer>
            {data.results.map((item) => (
                <ItemMovie 
                    key={item.id}
                    id={item.id}
                    image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    title={item.title}
                    vote_average={item.vote_average}
                    overview={item.overview}
                />
            ))}
        </ListContainer>
    );
};

export default ListMovie;
