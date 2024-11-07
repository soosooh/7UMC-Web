import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

const App = () => {
  const [userEmail, setUserEmail] = useState(null); // 로그인한 유저의 이메일 상태 관리

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout userEmail={userEmail} setUserEmail={setUserEmail} />, // userEmail과 setUserEmail 전달
      errorElement: <NotFound />,
      children: [
        {
          index: true,
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
          element: <Login setUserEmail={setUserEmail} />, // Login 컴포넌트에 setUserEmail 전달
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
      ],
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
