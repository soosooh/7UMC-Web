import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect, useState } from 'react'; 
import GlobalStyle from './styles/globalstyles.jsx';
import RootLayout from './layout/root-layout.jsx';
import NotFoundPage from "./pages/errorelement.jsx";

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
import styled from "styled-components";
import Maps from "./pages/maps.jsx";

import KakaoRedirectHandler from "./components/button/kakaoRedirect.jsx";

const queryClient = new QueryClient();
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
        path: 'map',
        element: <Maps/>
      },
      {
        path: 'login',
        errorElement: <NotFoundPage />,
        children: [
          {
            index:true,
            element: <Login/>
          },
          {
            path: 'auth',
            element: <KakaoRedirectHandler />
          },
        ]
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
    <QueryClientProvider client={queryClient}>
      <Container>
          <AuthProvider>
          <GlobalStyle/>
          <RouterProvider router={router}/>
        </AuthProvider>
      </Container>
      
    </QueryClientProvider>   
  )
}

const Container = styled.div `
  
  
  font-size: 1rem;

`;

export default App
