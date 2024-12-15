import { createBrowserRouter } from "react-router-dom";
import RootLayout from '../layouts/RootLayout';
import AlbumPage from '../pages/album';
import NotFoundPage from "../pages/notFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <AlbumPage />,
      },
    ],
  },
]);