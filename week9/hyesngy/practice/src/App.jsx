import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Todo from "./pages/todoPage";
import NotFound from "./pages/notFoundPage"

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
      <RouterProvider router={router} />
    </>

  );
}

export default App;
