import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layout/root-layout";
import GlobalStyle from "./styles/globalStyles";
import Home from "./pages/Home/Home";
import TodoDetail from "./pages/TodoDetail.jsx/TodoDetail";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <NotFound />,
      
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: ':id',
          element: <TodoDetail />
        },
      ]
  },
])

function App() {
    return (
      <>
        <GlobalStyle />
        <RouterProvider router={router}/>
      </>
    )
}

export default App;