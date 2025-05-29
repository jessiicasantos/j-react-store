import * as Yup from "yup";

export const userValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone must be a valid number")
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number must be at most 15 digits")
        .required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
    // upload: Yup
    //     .mixed()
    //     .test("file", "Upload is required", (value: any) => value && value.length > 0)
});