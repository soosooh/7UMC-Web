import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from './styles/global-style';

import './App.css'

import Todobanner from './components/todobanner'
import Details from './components/deatils';


function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
            <Routes>
                <Route path="/todo" element={<Todobanner />} />
                <Route path="/todo/:id" element={<Details />} />
            </Routes>
        </Router>
    </>
    
  )
}

export default App
