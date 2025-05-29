import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SingleProduct from "./components/SingleProduct";
import Products from "./components/Products";
import Contact from "./components/Contact/Contact";
import BasicContact from "./components/Contact/BasicContact";
import ContactReactHookForm from "./components/Contact/ContactReactHookForm";
import ContactUpload from "./components/Contact/ContactUpload";
import MultipleFormFIelds from "./components/Contact/MultipleFormFields";
import ValidateInput from "./components/Contact/ValidateInput";
import UncontrolledComponent from "./components/Contact/UncontrolledComponent/UncontrolledComponent";
import ReactHookForm from "./components/ReactHookForm";

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
                path: "/earbud-1",
                element: <SingleProduct />
            },
            {
                path: "/contact-us",
                element: <Contact />
            },
            {
                path: "/basic-contact",
                element: <BasicContact />
            },
            {
                path: "/contact-rhf",
                element: <ContactReactHookForm />
            },
            {
                path: "/contact-upload",
                element: <ContactUpload />
            },
            {
                path: "/handle-multiple-form-fields",
                element: <MultipleFormFIelds />
            },
            {
                path: "/validate-input",
                element: <ValidateInput />
            },
            {
                path: "/uncontrolled-component",
                element: <UncontrolledComponent />
            },
            {
                path: "/rhf",
                element: <ReactHookForm />
            }
        ]
    }
])