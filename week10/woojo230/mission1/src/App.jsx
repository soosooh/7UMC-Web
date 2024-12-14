import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Layout/root-layout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyle } from './styles/globalStyle.js';

// 페이지
import LogIn from './Pages/LogIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import Search from './Pages/Search.jsx';
import Movies from './Pages/Movies.jsx';
import NowPlaying from './Pages/MovieCategory/Now-playing.jsx';
import Popular from './Pages/MovieCategory/Popular.jsx';
import TopRated from './Pages/MovieCategory/Top-rated.jsx';
import UpComing from './Pages/MovieCategory/Up-coming.jsx';
import MovieDetailPage from './Pages/MovieDetailPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LogIn />,
      },
      {
        path: 'LogIn',
        element: <LogIn />,
      },
      {
        path: 'SignUp',
        element: <SignUp />,
      },
      {
        path: 'Search',
        element: <Search />,
      },
      {
        path: 'movies',
        children: [
          {
            index: true,
            element: <Movies />,
          },
          {
            path: 'NowPlaying',
            element: <NowPlaying />,
          },
          {
            path: 'Popular',
            element: <Popular />,
          },
          {
            path: 'TopRated',
            element: <TopRated />,
          },
          {
            path: 'UpComing',
            element: <UpComing />,
          },
          {
            path: ':movieId',
            element: <MovieDetailPage />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
