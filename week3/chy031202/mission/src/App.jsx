import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect, useState } from 'react'; 
import Movies from "./pages/movie.jsx";
import GlobalStyle from './styles/globalstyles.jsx';
import RootLayout from './layout/root-layout.jsx';

import Login from './pages/login.jsx';
import Signgin from './pages/signin.jsx';

import Search from './pages/search.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Movies/>
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
