import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from './pages/Search';
import Movies from './pages/Movies';  // 이 부분이 수정되었습니다
import NowPlaying from './pages/Movies/NowPlaying';
import Popular from './pages/Movies/Popular';
import TopRated from './pages/Movies/TopRated';
import Upcoming from './pages/Movies/Upcoming';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/now-playing" element={<NowPlaying />} />
          <Route path="/movies/popular" element={<Popular />} />
          <Route path="/movies/top-rated" element={<TopRated />} />
          <Route path="/movies/upcoming" element={<Upcoming />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;