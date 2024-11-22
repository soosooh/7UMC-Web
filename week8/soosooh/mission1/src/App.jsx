import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import TodoPage from "./pages/todo-page";
import NotFound from "./pages/not-found";
import DetailPage from "./pages/detail-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
