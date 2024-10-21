import useMovie from "../../hooks/useMovie";
import styled from "styled-components";
import ItemMovie from "./item-movie";

const ListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1rem;
`;

const ListMovie = ({ url }) => {
    const { movies, loading, error } = useMovie(url);

    if (loading) return <div className="outletContainer" style={{textAlign: "center"}}>영화 로딩 중...</div>;
    if (error) return <div className="outletContainer" style={{textAlign: "center"}}>로딩 중 오류가 발생했습니다.</div>;

    return (
        <ListContainer>
            {movies.map(movie => (
                <ItemMovie 
                    key={movie.id} 
                    title={movie.title}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    date={movie.release_date}
                    overview={movie.overview}
                /> 
            ))}
        </ListContainer>
    );
};

export default ListMovie;
