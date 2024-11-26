import {createBrowserRouter, RouterProvider} from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import RootLayout from "./layout/root-layout";
import Playlist from "./pages/Playlist/Playlist";
import NotFound from "./pages/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";

const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <NotFound />,

      children: [
        {
          index: true,
          element: <Playlist />
        },
      ]
    },
  ])

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  },[cartItems, dispatch])

    return (
      <>
        <GlobalStyle />
        <RouterProvider router={router}/>
      </>
    )
}

export default App;