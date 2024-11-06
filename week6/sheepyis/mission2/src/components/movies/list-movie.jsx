import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components";
import ItemMovie from "./item-movie";
import colors from "../../styles/colors";

const SkeletonLoader = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1rem;
    width: 100%;
`;

const SkeletonItem = styled.div`
    background-color: transparent;
    padding: 1rem;
    animation: pulse 1.5s infinite ease-in-out;

    @keyframes pulse {
        0% {
            background-color: transparent;
        }
        50% {
            background-color: transparent;
        }
        100% {
            background-color: transparent;
        }
    }
`;

const ListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1rem;
`;

const ListMovie = ({ url, query }) => {
    const { data, loading, error } = useFetch(url);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
    }, [query]);

    useEffect(() => {
        if (!loading && data) {
            setIsLoading(false);
        }
    }, [loading, data]);

    if (isLoading) {
        return (
            <ListContainer>
                {new Array(8).fill(null).map((_, index) => (
                    <SkeletonItem key={index}>
                        <div style={{ width: "100%", height: "11vw", backgroundColor: colors.navBackground }}></div>
                        <div style={{ marginTop: "0.5vw", height: "0.7vw", backgroundColor: colors.navBackground }}></div>
                        <div style={{ marginTop: "0.25vw", height: "0.6vw", backgroundColor: colors.navBackground }}></div>
                    </SkeletonItem>
                ))}
            </ListContainer>
        );
    }

    if (error) {
        return <div className="outletContainer" style={{ textAlign: "center" }}>로딩 중 오류가 발생했습니다.</div>;
    }

    return (
        <ListContainer>
            {data && data.length > 0 ? (
                data.map(movie => (
                    <ItemMovie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        date={movie.release_date}
                        overview={movie.overview}
                    />
                ))
            ) : (
                <div className="outletContainer" style={{ whiteSpace: "nowrap", fontSize: "0.8vw", fontWeight: "bold" }}>
                    {query ? `검색어 ${query}에 해당되는 데이터가 없습니다.` : ""}
                </div>
            )}
        </ListContainer>
    );
};

export default ListMovie;