import colors from "../../styles/colors";
import styled from "styled-components";

const BannerContainer = styled.div`
    width: 100%;
    height: 30vw;
    background-image: ${({ background }) => `url(https://image.tmdb.org/t/p/w500${background})`};
    background-size: cover;
    background-position: center;
    border: none;
    border-radius: 0.5vw;
    position: relative;
    opacity: 0.8;

    @media screen and (min-width: 768px) {
        height: 25vw;
    }
`

const BannerPContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    width: 45%;
    height: 100%;
    padding: 1rem;
    border-bottom: 0.3vw solid ${colors.white};
`

const BannerP = styled.p`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    font-size: ${props => props.fontSize || '1vw'};
    font-style: ${props => props.fontStyle || 'normal'};
`

const MovieDetailBanner = ({ movie }) => {
    // console.log(movie.pages[0]);

    const releaseYear = movie.pages[0].release_date.split('-')[0];

    return (
        <BannerContainer background={movie.pages[0].poster_path}>
            <BannerPContainer>
                <BannerP fontSize="1.4vw">{movie.pages[0].title}</BannerP>
                <BannerP>
                    평균 {movie.pages[0].vote_average.toFixed(1)} <br />
                    {releaseYear} <br />
                    {movie.runtime}분
                </BannerP>
                <BannerP fontSize="1.4vw" fontStyle="italic">{movie.pages[0].tagline}</BannerP>
                <BannerP>{movie.overview}</BannerP>
            </BannerPContainer>
        </BannerContainer>
    );
}

export default MovieDetailBanner;
