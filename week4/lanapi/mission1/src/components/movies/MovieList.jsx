// import styled from 'styled-components';
// import MovieItem from './MovieItem';

// const MoviesContainer = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     max-width: 100%;
//     gap: 30px;
//     padding: 10px;
// `;

// const MoviesList = ({ movies }) => {
//     return (
//         <MoviesContainer>
//             {movies.map((movie) => (
//                 <MovieItem key={movie.id} movie={movie} />
//             ))}
//         </MoviesContainer>
//     );
// };

// export default MoviesList;

import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <img src={movie.poster_path} alt={movie.title} />
      <h3>{movie.title}</h3>
    </Link>
  );
};

export default MovieItem;
