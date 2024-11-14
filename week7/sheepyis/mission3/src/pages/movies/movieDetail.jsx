import { useParams } from "react-router-dom";
import MovieDetailBanner from "../../components/movies/movieDetailBanner";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components"
import ListCredit from "../../components/movies/list-credit";

const DetailP = styled.p`
    font-size: 1.4vw;
    font-weight: bold;
    margin-top: 2vw;
`

const MovieDetail = () => {
    const { movieId } = useParams();
    const { data, loading, error } = useFetch(`/movie/${movieId}?append_to_response=credits`);

    if (loading) return <div className="outletContainer" style={{textAlign: "center"}}>영화 정보 로딩 중...</div>;
    if (error) return <div className="outletContainer" style={{textAlign: "center"}}>로딩 중 오류가 발생했습니다.</div>;

    return (
        <div className="outletContainer">
            <MovieDetailBanner movie={data} />

            <DetailP>감독/출연</DetailP>
            <ListCredit movie={data} />
        </div>
    );
}

export default MovieDetail;
