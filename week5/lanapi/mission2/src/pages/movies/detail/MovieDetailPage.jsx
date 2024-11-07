
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '../../../components/detail/Banner';
import CastList from '../../../components/detail/CastList';
import useFetch from '../../../hooks/UseFetch';

const Token = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzEyOWZhOWFjYWM2OGVkYWVjOWVmMGNlNzQ5YTc3MiIsIm5iZiI6MTczMDkwNTg2NS40NzUwMjE4LCJzdWIiOiI2NzA2ODM4MmE4ODYxNGQ2YjA4YWY1MzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._3AS3CHlvEEV5zqSvRICnrlqX42z2tgjt3I6QHbkvWY`;

const MovieDetailPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState({ cast: [], crew: [] });

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                    headers: {
                        Authorization: Token,
                    },
                    params: {
                        append_to_response: 'credits',
                    }
                });
                setMovie(movieResponse.data);
                setCredits(movieResponse.data.credits);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        fetchMovieDetails();
    }, [movieId]);

    if (!movie || !credits) return <div style={styles.loading}>Loading...</div>;

    const director = credits.crew.find(member => member.job === 'Director');
    const topCast = credits.cast.slice(0, 20);

    return (
        <div style={styles.container}>
            <Banner movie={movie} />
            <CastList director={director} cast={topCast} />
        </div>
    );
};

const styles = {
    container: {
        color: 'white',
        backgroundColor: '#333',
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
