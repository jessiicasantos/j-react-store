import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import MainPage from "./pages/MainPage/MainPage";
import Contact from "./pages/Contact/Contact";
import Category from "./pages/Category/Category";
import Login from "./pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/products/:productId",
                element: <SingleProduct />
            },
            {
                path: "/contact-us",
                element: <Contact />
            },
            {
                path: "/category/:categoryId",
                element: <Category />
            }
        ]
    }
])