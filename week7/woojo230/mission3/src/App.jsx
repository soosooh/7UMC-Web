import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/root-layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 페이지
import LogIn from "./Pages/LogIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Search from "./Pages/Search.jsx";
import Movies from "./Pages/Movies.jsx";
import NowPlaying from "./Pages/MovieCategory/Now-playing.jsx";
import Popular from "./Pages/MovieCategory/Popular.jsx";
import TopRated from "./Pages/MovieCategory/Top-rated.jsx";
import UpComing from "./Pages/MovieCategory/Up-coming.jsx";
import MovieDetailPage from "./Pages/MovieDetailPage.jsx";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
    min-width: 320px;
    overflow-x: hidden; /* 전체 페이지에서 좌우 스크롤 제거 */
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LogIn />,
      },
      {
        path: "LogIn",
        element: <LogIn />,
      },
      {
        path: "SignUp",
        element: <SignUp />,
      },
      {
        path: "Search",
        element: <Search />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "movies/NowPlaying",
        element: <NowPlaying />,
      },
      {
        path: "movies/Popular",
        element: <Popular />,
      },
      {
        path: "movies/TopRated",
        element: <TopRated />,
      },
      {
        path: "movies/UpComing",
        element: <UpComing />,
      },
      {
        path: "movies/:movieId",
        element: <MovieDetailPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
