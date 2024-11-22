import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import TodoPage from "./pages/todo-page";
import NotFound from "./pages/not-found";
import DetailPage from "./pages/detail-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
