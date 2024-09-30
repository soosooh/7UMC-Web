import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import GlobalStyle from './styles/globalStyles';

import Movie from './pages/movie';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;