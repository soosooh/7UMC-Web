//피드백 적용완료
//미션1,2의 components>movieCard.jsx 파일을 보면 hover시에 보이는 overlay 부분이 한 컴포넌트 내에 같이 작성 되어 있는 것 같아요. 
//별도의 파일로 분리해서 import 하는 방식으로 수정해주세요!

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Overlay from './Overlay'; // Overlay 컴포넌트 import

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
                <Overlay title={title} overview={overview} /> // Overlay 컴포넌트 사용
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
};

export default MovieCard;
