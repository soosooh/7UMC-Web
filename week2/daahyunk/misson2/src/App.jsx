import GlobalStyles from './styles/GlobalStyles';
import MovieCard from './components/MovieCard';
import { MOVIES } from './mocks/movies';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MOVIES.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default App;
