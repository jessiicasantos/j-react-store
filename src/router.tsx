import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Category from "./components/Category/Category";
import Login from "./components/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Products />
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