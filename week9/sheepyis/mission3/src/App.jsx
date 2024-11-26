import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import RootLayout from "./layout/root-layout";
import Playlist from "./pages/Playlist/Playlist";
import NotFound from "./pages/NotFound/NotFound";
import useCartStore from "./features/cart/cartSlice";
import { useEffect } from "react";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Playlist />,
            },
        ],
    },
]);

function App() {
    const cartItems = useCartStore((state) => state.cartItems);
    const calculateTotals = useCartStore((state) => state.calculateTotals);

    useEffect(() => {
        calculateTotals();
    }, [cartItems, calculateTotals]);

    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
