//피드백 반영
//app.jsx에서 movies도 / 처럼 children 사용해서 경로 설정해주세요!

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import HomePage from './pages/home/HomePage';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Search from './pages/search/Search';
import RootLayout from './layout/RootLayout';
import Category from './pages/movies/category/Category';
import NowPlaying from './pages/movies/category/NowPlaying';
import Popular from './pages/movies/category/Popular';
import TopRated from './pages/movies/category/TopRated';
import UpComing from './pages/movies/category/UpComing';
import MovieDetailPage from './pages/movies/detail/MovieDetailPage';

// 라우터 설정
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
        element: <Category />, // 카테고리 메인 페이지
      },
      {
        path: 'movies/now-playing',
        element: <NowPlaying />, // 현재 상영 중인 영화 페이지
      },
      {
        path: 'movies/popular',
        element: <Popular />, // 인기 영화 페이지
      },
      {
        path: 'movies/top-rated',
        element: <TopRated />, // 높은 평가를 받은 영화 페이지
      },
      {
        path: 'movies/up-coming',
        element: <UpComing />, // 개봉 예정 영화 페이지
      },
      {
        path: 'movies/:movieId',
        element: <MovieDetailPage />, // 영화 상세 페이지
      },
    ],
  },
], {
  future: {
    v7_partialHydration: true,
  },
});

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
