import MovieList from "../../components/movieList";

const category = "now_playing";
const authToken =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODljNDFhNzM5MTEwNGJjN2MzMjc3NDZmZTgyZGM5OSIsIm5iZiI6MTcyODI2MTM4MS4xNjMxOTYsInN1YiI6IjY3MDI1ODc4ZTQ4MDE0OTE0Njg1OGU3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wRBQDs9nj-5I5Mh9P4rUyDCJAmLnRVKL1y1XhedeOlM";

const NowPlaying = () => {
  console.log("NowPlaying 컴포넌트 렌더링");
  return <MovieList category={category} authToken={authToken} />;
};

export default NowPlaying;
