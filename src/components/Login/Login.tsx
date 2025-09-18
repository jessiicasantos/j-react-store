import "./Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../../validation/fieldsValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useState } from "react";
import { useNotification } from "../NotificationContext/NotificationContext";

export const Login = () => {
    const [ loginError, setLoginError ] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginValidationSchema)
    });

    const { login } = useAuth();
    const { setNotification } = useNotification();

    const onSubmit = async (data: any) => {
        try {
            const res = await axios.post('http://localhost:5000/api/login', {
                email: data.email,
                password: data.password
            });
            
            login(res.data.user);
            localStorage.setItem('token', res.data.token);
            
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setNotification({ message: 'You’ve successfully logged in!' , type: 'success' });
        } catch(error: any) {
            if(error.response?.status === 401) {
                console.error('Login failed!',  error);
                setLoginError("Email or password incorrect! Try again.");
                setNotification({ message: "Email or password incorrect! Try again.", type: 'error'});
            } else {
                setNotification({ message: "Erro ao tentar fazer o login", type: 'error'});
            }
        }
    };

    return (
        <>
        <div className="login">
            <div className="img-title flex flex-col justify-center items-center">
                <svg width="59" height="38" viewBox="0 0 59 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7204 0.398132C17.2432 0.398132 21.7204 4.87529 21.7204 10.3981V27.8981C21.7204 28.3584 22.0935 28.7315 22.5537 28.7315C23.0139 28.7315 23.387 28.3584 23.387 27.8981V10.3981C23.387 4.87528 27.8642 0.398132 33.387 0.398132H46.7204C53.1637 0.398132 58.387 5.62148 58.387 12.0648V16.2445C58.387 19.0514 57.3754 21.7649 55.5371 23.8861L44.1146 37.0648H30.8822L47.9801 17.3366L48.0729 17.2194C48.2767 16.9367 48.387 16.5955 48.387 16.2445V12.0648C48.387 11.1443 47.6409 10.3981 46.7204 10.3981H35.0537V9.5648C35.0537 9.10456 34.6806 8.73147 34.2204 8.73147C33.7601 8.73147 33.387 9.10456 33.387 9.5648V27.0648C33.387 32.5876 28.9099 37.0648 23.387 37.0648H21.7204C16.1975 37.0648 11.7204 32.5876 11.7204 27.0648V9.5648C11.7204 9.10456 11.3473 8.73147 10.887 8.73147C10.4268 8.73147 10.0537 9.10456 10.0537 9.5648V37.0648H0.0537109V10.3981C0.0537109 4.87528 4.53086 0.398132 10.0537 0.398132H11.7204Z" fill="#FC5800"></path>
                </svg>
                {/* <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                /> */}
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-left">
            <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    <p>{errors.email?.message}</p>
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                    </label>
                    {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                    </a>
                    </div> */}
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    type="password"
                    {...register("password")}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    <p>{errors.password?.message}</p>
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-orange-authentic px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-orange-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign in
                </button>
                </div>
                {loginError && (
                    <p>
                        {loginError}
                    </p>
                )}
            </form>

            {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
                Not a member?{' '}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
                </a>
            </p> */}
            </div>

        </div>
        </>
    )
}

export default Login;