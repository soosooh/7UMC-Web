import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from "./pages/login";
import NotFound from "./pages/not-found";
import Movies from "./pages/movies/movies";
import Search from "./pages/search";
import RootLayout from "./layout/root-layout";
import SignUp from "./pages/signup";
import HomePage from "./pages/home";
import NowPlaying from "./pages/movies/now-playing";
import Popular from "./pages/movies/popular";
import TopRated from "./pages/movies/top-rated";
import UpComing from "./pages/movies/up";
import MovieDetail from "./pages/movies/movie-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LogInPage />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "/movies/now-playing",
        element: <NowPlaying />,
      },
      {
        path: "movies/popular",
        element: <Popular />,
      },
      {
        path: "movies/top-rated",
        element: <TopRated />,
      },
      {
        path: "movies/up-coming",
        element: <UpComing />,
      },
      {
        path: "movies/:movieId",
        element: <MovieDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
