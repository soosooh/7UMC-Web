import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/root-layout";

// 페이지
import LogIn from "./Pages/LogIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Search from "./Pages/Search.jsx";
import Movies from "./Pages/Movies.jsx";
import NowPlaying from "./Pages/MovieCategory/Now-playing.jsx";
import Popular from "./Pages/MovieCategory/Popular.jsx";
import TopRated from "./Pages/MovieCategory/Top-rated.jsx";
import UpComing from "./Pages/MovieCategory/Up-coming.jsx";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    margin: 0px;
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
        path: "Movies",
        element: <Movies />,
      },
      {
        path: "NowPlaying",
        element: <NowPlaying />,
      },
      {
        path: "Popular",
        element: <Popular />,
      },
      {
        path: "TopRated",
        element: <TopRated />,
      },
      {
        path: "UpComing",
        element: <UpComing />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
