import React, { useState } from "react";
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
    padding: 1rem;
    animation: pulse 2s infinite ease-in-out;
`;

const ListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1rem;
`;

const PaginationContainer = styled.div`
    display: flex;
    gap: 1vw;
    justify-content: center;
    margin-top: 2rem;
    align-items: center;
`;

const PaginationButton = styled.button`
    padding: 0.5vw 1vw;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: ${colors.main};
    color: white;
    border: none;
    border-radius: 0.5vw;
    cursor: pointer;
    font-size: 1vw;
    font-weight: 700;

    &:disabled {
        background-color: ${colors.navBackground};
        cursor: not-allowed;
    }
`;

const PageP = styled.p`
    font-size: 1vw;
    font-weight: 700;
`

const ListMovie = ({ url, query }) => {
    const [page, setPage] = useState(1);
    const { data, totalPages, loading, error } = useFetch(url, page);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    if (loading) {
        return (
            <SkeletonLoader>
                {new Array(8).fill(null).map((_, index) => (
                    <SkeletonItem key={index}>
                        <div style={{ width: "100%", height: "11vw", backgroundColor: colors.navBackground }}></div>
                        <div style={{ marginTop: "0.5vw", height: "0.7vw", backgroundColor: colors.navBackground }}></div>
                        <div style={{ marginTop: "0.25vw", height: "0.6vw", backgroundColor: colors.navBackground }}></div>
                    </SkeletonItem>
                ))}
            </SkeletonLoader>
        );
    }

    if (error) {
        return <div className="outletContainer" style={{ textAlign: "center" }}>로딩 중 오류가 발생했습니다.</div>;
    }

    return (
        <>
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

            <PaginationContainer>
                <PaginationButton onClick={handlePreviousPage} disabled={page === 1}>이전</PaginationButton>
                <PageP>{page} 페이지</PageP>
                <PaginationButton onClick={handleNextPage} disabled={page >= totalPages}>다음</PaginationButton>
            </PaginationContainer>
        </>
    );
};

export default ListMovie;
