import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

// 1. 만든 페이지들을 import
import HomePage from "./pages/home.jsx";
import NotFound from "./pages/not-found.jsx";
import Movies from "./pages/movies.jsx";
import RootLayout from './layout/root-layout.jsx';

// 2. 연결
const router = createBrowserRouter([
    {
        path: '/',
        //element: <HomePage/>,
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        children : [
            {
                // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
                index: true,
                element: <HomePage/>
            },
            {
                // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
                path: 'movies/:movieId',
                element: <Movies/>
            }
        ]
    },
])

function App() {
    return <RouterProvider router={router}/>
}

export default App
