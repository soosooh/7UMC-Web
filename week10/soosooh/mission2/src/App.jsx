import React from "react";
//타입스크립트에서는 꼭 react 임포트 해주기 !!!
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
import UpComing from "./pages/movies/up-coming";
import MovieDetail from "./pages/movies/movie-detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Movies />,
          },
          {
            path: "now-playing",
            element: <NowPlaying />,
          },
          {
            path: "popular",
            element: <Popular />,
          },
          {
            path: "top-rated",
            element: <TopRated />,
          },
          {
            path: "up-coming",
            element: <UpComing />,
          },
          {
            path: ":movieId",
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
