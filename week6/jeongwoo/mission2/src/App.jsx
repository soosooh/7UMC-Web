import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './layout/RootLayout.jsx';
import Home from './pages/Home/index.jsx';
import  Login  from './pages/Auth/Login.jsx';  
import  Signup  from './pages/Auth/Signup.jsx'; 
import Search from './pages/Search/index.jsx';
import Movies from './pages/Movies/index.jsx';
import NowPlaying from './pages/Movies/NowPlaying/index.jsx';
import Popular from './pages/Movies/Popular/index.jsx';
import TopRated from './pages/Movies/TopRated/index.jsx';
import Upcoming from './pages/Movies/Upcoming/index.jsx';
import MovieDetail from './pages/MovieDetail/index.jsx';  // 새로 추가

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'search',
        element: <Search />
      },
      {
        path: 'movies',
        children: [
          {
            index: true,
            element: <Movies />
          },
          {
            path: ':movieId',  // 영화 상세 페이지 라우트 추가
            element: <MovieDetail />
          },
          {
            path: 'now-playing',
            element: <NowPlaying />
          },
          {
            path: 'popular',
            element: <Popular />
          },
          {
            path: 'top-rated',
            element: <TopRated />
          },
          {
            path: 'upcoming',
            element: <Upcoming />
          }
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;