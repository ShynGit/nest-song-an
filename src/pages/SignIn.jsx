import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo/Logo";
import { useForm } from "react-hook-form";
import { userApi } from "../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import {
    selectUser,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
} from "../features/user/userSlice";
import { getErrorMessageFromServer } from "../utils/serverUtils";
import { useEffect } from "react";
import { Loading } from "../components/Loading/Loading";

export const SignIn = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    // Submit form function
    const onSubmit = (input) => {
        const fetchUser = async () => {
            try {
                dispatch(USER_LOGIN_REQUEST());

                const response = await userApi.login(input);
                localStorage.setItem("token", JSON.stringify(response));
                dispatch(USER_LOGIN_SUCCESS(response));
            } catch (error) {
                const errorMessage = getErrorMessageFromServer(error);
                dispatch(USER_LOGIN_FAIL(errorMessage));
            }
        };
        fetchUser();
    };

    // Navigate to home page and prevent going to login page after login
    useEffect(() => {
        if (user.token) navigate("/");
    }, [user.token]);

    return (
        <section className="h-screen">
            <div
                className="h-full w-full text-gray-800 bg-fixed bg-gray-100/40"
                style={{
                    backgroundSize: "100%",
                    backgroundPosition: "100%",
                }}
            >
                {user.loading ? (
                    <Loading />
                ) : (
                    <div className="flex flex-col xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full">
                        <div className="md:w-fit w-11/12 border border-gray-300 bg-white flex blocks rounded-lg p-10 pb-7 shadow-2xl shadow-gray-800">
                            <div className="lg:w-96 px-4 md:px-0 hidden md:block lg:flex lg:flex-col lg:justify-center lg:items-center mb-9">
                                <Logo />
                            </div>
                            <div className="lg:w-72 w-full px-4 md:px-0">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="text-center font-bold text-xl my-3 ">
                                        ĐĂNG NHẬP
                                    </div>
                                    <div>
                                        {user.isloggedInSuccess === false && (
                                            <div
                                                className="bg-red-100 rounded-lg py-3 px-6 mt-3 text-sm text-red-700 inline-flex items-center w-full"
                                                role="alert"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fas"
                                                    data-icon="times-circle"
                                                    className="w-4 h-4 mr-2 fill-current"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                                                    ></path>
                                                </svg>
                                                Sai tài khoản hoặc mật khẩu. Hãy
                                                thử lại!
                                            </div>
                                        )}
                                        <input
                                            {...register("username")}
                                            className="p-1.5 pl-3 focus:ring-1 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-sm ring-1 ring-gray-300 mt-3"
                                            type="text"
                                            aria-label="Filter projects"
                                            placeholder="Tên đăng nhập..."
                                            maxLength={70}
                                            minLength={3}
                                            required
                                        />
                                        <input
                                            {...register("password")}
                                            className="p-1.5 pl-3 focus:ring-1 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-sm ring-1 ring-gray-300 mt-3"
                                            type="password"
                                            aria-label="Filter projects"
                                            placeholder="Mật khẩu..."
                                            minLength={8}
                                            required
                                        />
                                    </div>
                                    <button className="w-full mt-5 inline-block p-2.5 hover:bg-gray-700 text-white font-medium text-xs leading-snug uppercase rounded shadow-gray-400 bg-gray-500 transition duration-100 ease-in-out">
                                        Đăng nhập
                                    </button>
                                    <div className="flex items-center my-4">
                                        <div className="flex-1 border-t border-gray-300 mt-0.5" />
                                        <p className="text-center text-gray-400 mx-4 mb-0">
                                            Hoặc
                                        </p>
                                        <div className="flex-1 border-t border-gray-300 mt-0.5" />
                                    </div>
                                    <div className="flex justify-center">
                                        <GoogleOAuthProvider
                                            clientId={
                                                process.env
                                                    .REACT_APP_GOOGLE_CLIENT_ID
                                            }
                                        >
                                            <GoogleLogin
                                                onSuccess={(
                                                    credentialResponse
                                                ) => {
                                                    console.log(
                                                        credentialResponse
                                                    );
                                                }}
                                                onError={() => {
                                                    console.log("Login Failed");
                                                }}
                                                useOneTap
                                            />
                                        </GoogleOAuthProvider>
                                    </div>
                                    <div className="text-sm text-center opacity-60 mt-4">
                                        Bạn chưa có tài khoản?&nbsp;
                                        <Link to="/sign-up">
                                            <span className="text-blue-600 font-bold active:text-blue-400">
                                                Đăng ký
                                            </span>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
