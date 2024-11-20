import styled from "styled-components";


const Banner = ({ movie }) => {
    return (
        <Intro bgimage={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}>
            <h1>{movie.title}</h1>
            <p>
                평균 {movie.vote_average}
                <br />
                {movie.release_date}
                <br />
                {movie.runtime} 분
                <br />
                <br />
                <Overview>{movie.overview}</Overview>
            </p>
        </Intro>
    );
};


const Intro = styled.article`
    padding: 20px;
    background-image: url(${(props) => props.bgimage});
    background-size: cover;
    background-position: center;
    width: auto;
    height: 335px;
    border-radius: 10px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
        z-index: -1;
    }
`;

const Overview = styled.div`
    width: 500px;
`;

export default Banner;