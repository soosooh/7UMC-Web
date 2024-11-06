import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from './styles/GlobalStyles';
import RootLayout from "./layout/root-layout";
import CategoryPage from './pages/category/CategoriesPage'; 
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import SearchPage from "./pages/search/SearchPage";
import NowPlaying from "./pages/movies/NowPlaying";
import Popular from "./pages/movies/Popular"; 
import TopRated from "./pages/movies/TopRated"; 
import Upcoming from "./pages/movies/Upcoming"; 
import MovieDetailPage from './pages/movies/MovieDetailPage';
import { AuthProvider } from "./context/AuthContext"; 

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
