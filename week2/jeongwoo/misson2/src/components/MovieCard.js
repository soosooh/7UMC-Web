import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: '180px', // 카드 너비를 약간 줄임
    margin: '0', // 마진 제거 (간격은 MovieList에서 관리)
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#2c3e50',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '20px',
    display: isHovered ? 'block' : 'none',
    overflow: 'auto',
  };

  const infoStyle = {
    padding: '10px',
    color: 'white',
  };

  const titleStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const ratingStyle = {
    fontSize: '14px',
    color: '#f1c40f',
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={imageStyle}
      />
      <div style={overlayStyle}>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
      <div style={infoStyle}>
        <div style={titleStyle}>{movie.original_title}</div>
        <div style={ratingStyle}>{movie.vote_average.toFixed(1)}</div>
      </div>
    </div>
  );
};

export default MovieCard;