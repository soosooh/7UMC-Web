import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from './styles/GlobalStyles.js';
import RootLayout from "./layout/root-layout.jsx";
import CategoryPage from './pages/category/CategoriesPage.jsx'; 
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignupPage from "./pages/auth/SignUpPage.jsx";
import SearchPage from "./pages/search/SearchPage.jsx";
import NowPlaying from "./pages/movies/NowPlaying.jsx";
import Popular from "./pages/movies/Popular.jsx"; 
import TopRated from "./pages/movies/TopRated.jsx"; 
import Upcoming from "./pages/movies/UpComing.jsx"; 
import MovieDetailPage from './pages/movies/MovieDetailPage.jsx';
import { AuthProvider } from "./context/AuthContext.jsx"; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'movies',
        element: <CategoryPage /> 
      },
      {
        path: 'movies/now-playing',
        element: <NowPlaying />
      },
      {
        path: 'movies/popular',
        element: <Popular />  
      },
      {
        path: 'movies/top-rated',
        element: <TopRated /> 
      },
      {
        path: 'movies/upcoming',
        element: <Upcoming />  
      },
      {
        path: 'movies/:movieId', 
        element: <MovieDetailPage />  
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <SignupPage />
      },
      {
        path: 'search',
        element: <SearchPage />
      }
    ]
  },
]);

const App = () => {
  return (
    <AuthProvider> 
      <GlobalStyles />
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
