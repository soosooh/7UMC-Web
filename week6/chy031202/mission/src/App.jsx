
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect, useState } from 'react'; 
import GlobalStyle from './styles/globalstyles.jsx';
import RootLayout from './layout/root-layout.jsx';

import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Signgin from './pages/signin.jsx';

import Search from './pages/search.jsx';
import Category from './pages/category.jsx';

import NowPlaying from './pages/movies/now-playing.jsx';
import Popular from './pages/movies/popular.jsx';
import TopRated from './pages/movies/top-rated.jsx';
import Upcoming from './pages/movies/up-coming.jsx';

import MovieID from './pages/movies/movieId.jsx';
import { AuthProvider } from './contexts/LoginContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'signup',
        element: <Signgin/>
      },
      {
        path: 'search',
        element: <Search/>
      },
      {
        path: 'category',
        element: <Category/>
      },
      {
        path: 'movies',
        children: [
          {
            path: 'now-playing',
            element: <NowPlaying/>
          },
          {
            path: 'popular',
            element: <Popular/>
          },
          {
            path: 'top-rated',
            element: <TopRated/>
          },
          {
            path: 'up-coming',
            element: <Upcoming/>
          },
          {
            path: ':movieId',
            element: <MovieID/>
          }
        ]
      }

    ]
  }
])

function App() {


  return (
    <AuthProvider>
      <GlobalStyle/>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
