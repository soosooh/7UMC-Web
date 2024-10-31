import React from 'react';
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
        element: <Category />,
      },
      {
        path: 'movies/now-playing',
        element: <NowPlaying />
      },
      {
        path: 'movies/popular',
        element: <Popular />
      },
      {
        path: 'movies/top-rated',
        element: <TopRated />
      },
      {
        path: 'movies/up-coming',
        element: <UpComing />
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
      },
      {  path: '/movies/:movieId',
        element: <Detail />
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