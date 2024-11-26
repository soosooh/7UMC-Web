import {createBrowserRouter, RouterProvider} from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import Todo from "./pages/Todo/Todo";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Todo />,
      errorElement: <NotFound />
    }
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