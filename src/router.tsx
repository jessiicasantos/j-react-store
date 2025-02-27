import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SingleProduct from "./components/SingleProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/fone-1",
                element: <SingleProduct />
            }
        ]
    }
])