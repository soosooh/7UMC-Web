import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Home from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
import NowPlaying from './pages/Movies/NowPlayingPage';
import Popular from './pages/Movies/PopularPage';
import TopRated from './pages/Movies/TopRatedPage';
import UpComing from './pages/Movies/UpcomingPage';
import MovieDetail from './pages/Movies/MovieDetailPage';
import Login from './pages/Auth/LoginPage';
import SignUp from './pages/Auth/SignUpPage';
import Category from './pages/CategoryPage';
import Search from './pages/SearchPage';
import RootLayout from './layout/root-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'movies',
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Category />,
          },
          {
            path: 'now-playing',
            element: <NowPlaying />
          },
          {
            path: 'popular',
            element: <Popular />
          },
          {
            path: 'top-rated',
            element: <TopRated />
          },
          {
            path: 'up-coming',
            element: <UpComing />
          },
          {
            path: ':movieId',
            element: <MovieDetail />
          }
        ]
      },

      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'search',
        element: <Search />
      }
    ]
  },
]);


const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
