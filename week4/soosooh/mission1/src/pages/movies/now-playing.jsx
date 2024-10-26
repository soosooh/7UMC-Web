import MovieList from "../../components/movieList";

const category = "now_playing";

const NowPlaying = () => {
  console.log("NowPlaying 컴포넌트 렌더링");
  return <MovieList category={category} />;
};

export default NowPlaying;
