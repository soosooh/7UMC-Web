import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const MovieCard = ({ movieId, posterPath, title, releaseDate, overview }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate(); 

    const handleCardClick = () => {
        navigate(`/movies/${movieId}`); 
    };

    return (
        <div
            className="movie-card"
            style={styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick} 
        >
            <img 
                src={`https://image.tmdb.org/t/p/w500${posterPath}`} 
                alt={title} 
                style={styles.poster}
            />
            <div style={styles.info}>
                <h3 style={styles.title}>{title}</h3>
                <p style={styles.releaseDate}>{releaseDate}</p>
            </div>
            {isHovered && (
                <div style={styles.overlay}>
                    <h3 style={styles.overlayTitle}>{title}</h3>
                    <p style={styles.overview}>{overview}</p>
                </div>
            )}
        </div>
    );
};

const styles = {
    card: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#0000',
        color: 'white',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '10px',
        maxWidth: '200px',
        cursor: 'pointer',
    },
    poster: {
        width: '100%',
        borderRadius: '8px',
    },
    info: {
        marginTop: '10px',
        textAlign: 'center',
    },
    title: {
        fontSize: '16px',
        marginBottom: '5px',
    },
    releaseDate: {
        fontSize: '14px',
        color: '#ddd',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '8px',
    },
    overlayTitle: {
        fontSize: '18px',
        marginBottom: '10px',
        textAlign: 'left',
    },
    overview: {
        fontSize: '14px',
        textAlign: 'center',
    },
};

export default MovieCard;
