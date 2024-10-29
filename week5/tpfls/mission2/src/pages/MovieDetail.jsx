import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`);
                if (!movieResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const movieData = await movieResponse.json();
                setMovie(movieData);

                const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`);
                if (!creditsResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const creditsData = await creditsResponse.json();
                setCredits(creditsData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetail();
    }, [movieId]);

    if (loading) return <LoadingMessage>로딩 중...</LoadingMessage>;
    if (error) return <ErrorMessage>Error: {error}</ErrorMessage>;

    return (
        <DetailContainer>
            <BackgroundImage src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
            <ContentContainer>
                <Title>{movie.title}</Title>
                <Rating>평균 {movie.vote_average}</Rating>
                <ReleaseDate>{movie.release_date} | {movie.runtime}분</ReleaseDate>
                <Overview>{movie.overview}</Overview>
                <CastSection>
                    <CastTitle>감독/출연</CastTitle>
                    <CastGrid>
                        {credits.crew.filter(member => member.job === 'Director').map(director => (
                            <CastCard key={director.id}>
                                <CastImage src={`https://image.tmdb.org/t/p/w200${director.profile_path}`} alt={director.name} />
                                <CastName>{director.name}</CastName>
                            </CastCard>
                        ))}
                        {credits.cast.slice(0, 10).map(actor => (
                            <CastCard key={actor.id}>
                                <CastImage src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                                <CastName>{actor.name}</CastName>
                            </CastCard>
                        ))}
                    </CastGrid>
                </CastSection>
            </ContentContainer>
        </DetailContainer>
    );
};

// Styled Components
const DetailContainer = styled.div`
    color: white;
    position: relative;
`;

const BackgroundImage = styled.img`
    width: 100%;
    height: 50vh; 
    object-fit: cover; 
`;

const ContentContainer = styled.div`
    padding: 20px;
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7); 
    width: 100%;
`;

const Title = styled.h2`
    font-size: 2rem;
    margin: 10px 0;
`;

const Rating = styled.p`
    font-size: 1.2rem;
`;

const ReleaseDate = styled.p`
    font-size: 1rem;
    color: #ccc;
`;

const Overview = styled.p`
    margin: 10px 0;
`;

const CastSection = styled.div`
    margin-top: 20px;
`;

const CastTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const CastGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
`;

const CastCard = styled.div`
    text-align: center;
`;

const CastImage = styled.img`
    width: 100%;
    border-radius: 50%; 
`;

const CastName = styled.p`
    margin-top: 5px;
    font-size: 0.9rem;
`;

const LoadingMessage = styled.p`
    text-align: center;
    color: white;
`;

const ErrorMessage = styled.p`
    text-align: center;
    color: red;
`;

export default MovieDetail;
