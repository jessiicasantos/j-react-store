import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Products from "./components/Products";
import Contact from "./components/Contact/Contact";
import Category from "./components/Category/Category";

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