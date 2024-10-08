import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout'; // Layout 컴포넌트
import NowPlaying from './pages/nowplaying';
import Popular from './pages/popular';
import TopRated from './pages/toprated';
import Upcoming from './pages/Upcoming';
import HomePage from './pages/Home'; // HomePage 컴포넌트
import Search from './pages/search';
import LoginPage from './pages/login'; // login.jsx로 변경된 파일명
import SignUpPage from './pages/signup'; // signup.jsx로 변경된 파일명
import Categories from './components/Categories'; // Categories 컴포넌트 추가

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} /> {/* 기본 경로에 HomePage 연결 */}
                    <Route path="movies/now-playing" element={<NowPlaying />} />
                    <Route path="movies/popular" element={<Popular />} />
                    <Route path="movies/top-rated" element={<TopRated />} />
                    <Route path="movies/upcoming" element={<Upcoming />} />
                    <Route path="search" element={<Search />} />
                    <Route path="categories" element={<Categories />} /> {/* Categories 페이지 추가 */}
                    <Route path="login" element={<LoginPage />} /> {/* 로그인 페이지 */}
                    <Route path="signup" element={<SignUpPage />} /> {/* 회원가입 페이지 */}
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
