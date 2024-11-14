//피드백 반영
//app.jsx에서 movies도 / 처럼 children 사용해서 경로 설정해주세요!

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import HomePage from './pages/home/HomePage';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Search from './pages/search/Search';
import NowPlaying from './pages/movies/category/NowPlaying';
import Popular from './pages/movies/category/Popular';
import TopRated from './pages/movies/category/TopRated';
import UpComing from './pages/movies/category/UpComing';
import MovieDetailPage from './pages/movies/detail/MovieDetailPage';
import RootLayout from './layout/RootLayout';
import Category from './pages/movies/category/Category';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'search',
        element: <Search />,
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
        path: 'movies/:movieId',
        element: <MovieDetailPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
