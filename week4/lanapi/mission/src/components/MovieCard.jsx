

// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { useState } from 'react';

// const MovieCard = ({ posterPath, title, releaseDate, overview, movieId }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const navigate = useNavigate();

//     const handleCardClick = () => {
//         navigate(`/movies/${movieId}`);
//     };

//     return (
//         <MovieCardDiv
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             onClick={handleCardClick}
//         >
//             <MoviePosterImg src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
//             {isHovered && (
//                 <HoverInfo>
//                     <MovieTitle>{title}</MovieTitle>
//                     <MovieOverview>{overview}</MovieOverview>
//                 </HoverInfo>
//             )}
//             <MovieName>{title}</MovieName>
//             <MovieDate>{releaseDate}</MovieDate>
//         </MovieCardDiv>
//     );
// };

// export default MovieCard;

// // 스타일 컴포넌트 정의
// const MovieCardDiv = styled.div`
//     position: relative;
//     height: 230px;
//     width: 120px;
//     margin: 10px;
//     cursor: pointer;
// `;

// const MoviePosterImg = styled.img`
//     width: 120px;
//     height: 173px;
//     border-radius: 0.5em;
//     &:hover {
//         cursor: pointer;
//         filter: brightness(0.5);
//     }
// `;

// const HoverInfo = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.7);
//     color: white;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     padding: 10px;
//     border-radius: 0.5em;
// `;

// const MovieTitle = styled.h3`
//     font-size: 0.9em;
//     margin-bottom: 5px; 
// `;

// const MovieOverview = styled.p`
//     font-size: 0.7em;
//     max-height: 7.2em;
//     overflow: hidden;
//     display: -webkit-box;
//     -webkit-line-clamp: 4;
//     -webkit-box-orient: vertical;
//     text-overflow: ellipsis;
// `;

// const MovieName = styled.div`
//     color: white;
//     font-size: 0.7em;
//     margin-top: 5px;
//     text-align: left;
// `;

// const MovieDate = styled.div`
//     color: white;
//     font-size: 0.7em;
//     margin-top: 5px;
//     text-align: left;
// `;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 스타일링 예시
const Card = styled.div`
  margin: 10px;
  width: 200px;
`;

const Poster = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const MovieCard = ({ posterPath, title, releaseDate, movieId }) => {
  return (
    <Card>
      <Link to={`/movies/${movieId}`}>
        <Poster src={`https://image.tmdb.org/t/p/w200${posterPath}`} alt={title} />
      </Link>
      <h3>{title}</h3>
      <p>{releaseDate}</p>
    </Card>
  );
};

export default MovieCard;
