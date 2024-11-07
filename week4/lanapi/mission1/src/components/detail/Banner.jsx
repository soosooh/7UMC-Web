import styled from 'styled-components';

const Banner = ({ movie }) => (
    <MovieImageWrapper backImg={movie?.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : "#" }>
        <Overlay>
            <BannerContent>
                <Title>{movie?.title}</Title>
                <Rate>평점: {movie?.vote_average}</Rate>
                <YearAndRuntime>개봉연도: {movie?.release_date?.substring(0, 4)} | 러닝타임: {movie?.runtime}분</YearAndRuntime>
                <Slogan>{movie?.tagline}</Slogan>
                <Overview>{movie?.overview}</Overview>
            </BannerContent>
        </Overlay>
    </MovieImageWrapper>
);

const MovieImageWrapper = styled.div`
    width: 100vw;
    height: 500px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    background-image: url(${props => props.backImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 33%, rgba(0, 0, 0, 0.4) 66%, rgba(0, 0, 0, 0) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
`;

const BannerContent = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    max-width: 500px;
`;

const Title = styled.h2`
    font-size: 43px;
    margin-bottom: 8px;
    text-align: left;
`;

const Rate = styled.p`
    font-size: 19px;
    margin-bottom: 8px;
`;

const YearAndRuntime = styled.p`
    font-size: 15px;
    margin-bottom: 8px;
`;

const Slogan = styled.p`
    font-size: 25px;
    font-style: italic;
    margin-bottom: 16px;
`;

const Overview = styled.p`
    font-size: 13px;
    margin-top: 16px;
    text-align: left;
`;

export default Banner;
