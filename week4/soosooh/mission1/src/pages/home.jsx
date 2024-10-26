import useCustomFetch from "../hooks/useCunstomFetch";
import MovieList from "../components/movieList";
import { Title } from "../styles/styles";

const HomePage = () => {
  const { data, isLoading, isError } = useCustomFetch(
    `/movie/popular?language=ko-KR&page=1`
  );
  console.log(data);
  return <MovieList />;
};

export default HomePage;
