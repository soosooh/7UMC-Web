import MovieList from "../../components/movie/movie-list";

const category = "now_playing";

const NowPlaying = () => {
  console.log("NowPlaying 컴포넌트 렌더링");
  return <MovieList category={category} />;
};

export default NowPlaying;
