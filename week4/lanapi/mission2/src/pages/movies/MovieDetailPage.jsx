 
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieDetailBanner from '../../components/movies/MovieDetailBanner';
import styled from 'styled-components';

const Token = "Bearer my Token";
const MovieDetailPage = () => {
    const { movieId } = useParams(); // movieId 파라미터 가져오기
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState({ cast: [], crew: [] });

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=ko`, {
                    headers: {
                        Authorization: Token,
                    }
                });
                setMovie(movieResponse.data);

                const creditResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
                    headers: {
                        Authorization: Token,
                    }
                });
                setCredits(creditResponse.data);

            } catch (error) {
                console.error('화면을 불러올 수 없습니다. 주소를 다시 확인해주세요.', error);
            }
        };
        fetchMovieDetails();
    }, [movieId]);

    if (!movie || !credits) return <div style={styles.loading}>Loading...</div>;

    const director = credits.crew.find(member => member.job === 'Director');
    const topCast = credits.cast.slice(0, 20); 

    return (
        <div style={styles.container}>
            <MovieDetailBanner movie={movie} />

            <CastTitle>Directed by / Starring</CastTitle>

            <CreditWrapper>
                {director && (
                    <CreditItem>
                        <CreditImage src={`https://image.tmdb.org/t/p/w500${director.profile_path}`} alt={director.name} />
                        <CreditName>{director.name}</CreditName>
                        <CreditRole>감독</CreditRole>
                    </CreditItem>
                )}
                {topCast.map((actor) => (
                    <CreditItem key={actor.cast_id}>
                        <CreditImage src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
                        <CreditName>{actor.name}</CreditName>
                        <CreditRole>{actor.character}</CreditRole>
                    </CreditItem>
                ))}
            </CreditWrapper>
        </div>
    );
};

const CastTitle = styled.h2`
  font-size: 40px;
  margin: 40px 0 40px 0; 
  text-align: left;
  color: white;
  font-family: 'Georgia', serif;
`;

const CreditWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 20px;
  box-sizing: border-box;
  justify-content: flex-start; 
`;

const CreditItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: calc(10% - 40px); 
  flex-basis: calc(10% - 40px); 
`;

const CreditImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    background-color: black;
    display: block;
    border: 2px solid white;
    margin-bottom: 10px;
`;

const CreditName = styled.p`
  font-size: 14px;
  color: white;
  margin: 5px 0 3px 0;
  text-align: center;
`;

const CreditRole = styled.p`
  font-size: 12px;
  color: #ccc;
  margin: 0;
  text-align: center;
  font-style: italic;
`;

const styles = {
    container: {
        color: 'white',
        backgroundColor: '#00000',
        padding: '20px',
        textAlign: 'center',
    },
    loading: {
        color: 'white',
        textAlign: 'center',
        marginTop: '50px',
    }
};

export default MovieDetailPage;
