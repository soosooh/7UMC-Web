import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect, useState } from 'react'; 
import Movies from "./pages/movie.jsx";
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
        path: 'movies/now-playing',
        element: <NowPlaying/>
      },
      {
        path: '/movies/popular',
        element : <Popular/>
      },
      {
        path: '/movies/top-rated',
        element : <TopRated/>
      },
      {
        path: '/movies/up-coming',
        element : <Upcoming/>
      }

    ]
  }
])

function App() {


  return (
    <>
      <GlobalStyle/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
