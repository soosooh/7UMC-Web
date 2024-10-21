import { useParams } from "react-router-dom";
import MovieDetailBanner from "../../components/movies/movieDetailBanner";
import useMovieDetail from "../../hooks/useMovieDetail";
import styled from "styled-components"
import ListCredit from "../../components/movies/list-credit";

const DetailP = styled.p`
    font-size: 1.4vw;
    font-weight: bold;
    margin-top: 2vw;
`

const MovieDetail = () => {
    const { movieId } = useParams();
    const { movie, loading, error } = useMovieDetail(movieId);

    if (loading) return <div className="outletContainer" style={{textAlign: "center"}}>영화 정보 로딩 중...</div>;
    if (error) return <div className="outletContainer" style={{textAlign: "center"}}>로딩 중 오류가 발생했습니다.</div>;

    return (
        <div className="outletContainer">
            <MovieDetailBanner movie={movie} />

            <DetailP>감독/출연</DetailP>
            <ListCredit movie={movie} />
        </div>
    );
}

export default MovieDetail;
