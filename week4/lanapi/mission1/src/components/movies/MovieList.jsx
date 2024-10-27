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
