import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from './styles/global-style';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import './App.css'

import Todobanner from './components/todobanner'
import Details from './components/deatils';

const queryClient = new QueryClient();
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <Router>
            <Routes>
                <Route path="/todo" element={<Todobanner />} />
                <Route path="/todo/:id" element={<Details />} />
            </Routes>
        </Router>
        </QueryClientProvider>
    </>
    
  )
}

export default App
