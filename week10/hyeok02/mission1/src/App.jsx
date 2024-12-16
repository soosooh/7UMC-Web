import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import NowPlaying from './page/moviepage/NowPlaying';
import UpComing from './page/moviepage/UpComing';
import Popular from './page/moviepage/Popular';
import TopRated from './page/moviepage/TopRated';
import Category from './page/Category';
import Home from './page/Home';
import Login from './page/Login';
import NotFound from './page/NotFound';
import Search from './page/Search';
import SignUp from './page/SignUp';
import RootLayout from './Layout/Root-layout';
import GlobalStyle from './styles/GlobalStyles';
import Detail from './page/moviepage/Detail';
import Maps from './page/Maps';

const queryClient = new QueryClient();

const App = () => {
  const [userEmail, setUserEmail] = useState(null); 

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout userEmail={userEmail} setUserEmail={setUserEmail} />, 
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Navigate to="home" replace />,
        },
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'movies',
          element: <Category />,
        },
        {
          path: 'movies/now-playing',
          element: <NowPlaying />,
        },
        {
          path: 'movies/popular',
          element: <Popular />,
        },
        {
          path: 'movies/top-rated',
          element: <TopRated />,
        },
        {
          path: 'movies/up-coming',
          element: <UpComing />,
        },
        {
          path: 'login',
          errorElement: <NotFound />,
          children: [
            {
              index: true,
              element: <Login setUserEmail={setUserEmail} />, 
            },
            {
              path: 'auth',
              element: <Login setUserEmail={setUserEmail} />, 
            },
          ],
        },
        {
          path: 'signup',
          element: <SignUp />,
        },
        {
          path: 'search',
          element: <Search />,
        },
        {
          path: '/movies/:movieId',
          element: <Detail />,
        },
        {
          path: '/map',
          element: <Maps />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
