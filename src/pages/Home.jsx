import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "../components/Production/List";
import background from "../assets/images/background-image.jpg";
import { Sale } from "../components/Production/Sale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faFire } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, USER_CLEAR } from "../features/user/userSlice";

export const Home = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [loginSuccess, setLoginSuccess] = useState(user.isloggedInSuccess);
    const [logoutSuccess, setLogoutSuccess] = useState(user.isloggedOutSuccess);

    useEffect(() => {
        if (user.isloggedInSuccess)
            setTimeout(() => setLoginSuccess(false), 2000);
        if (user.isloggedOutSuccess)
            setTimeout(() => setLogoutSuccess(false), 2000);
        dispatch(USER_CLEAR());
    }, []);

    return (
        <>
            {loginSuccess === true && (
                <div
                    className="z-10 fixed w-fit top-20 right-14 transition-all duration-200 bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center"
                    role="alert"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check-circle"
                        className="w-4 h-4 mr-2 fill-current"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                    </svg>
                    Đăng nhập thành công
                </div>
            )}
            {logoutSuccess === true && (
                <div
                    className="z-10 fixed w-fit top-20 right-14 transition-all duration-200 bg-cyan-100 rounded-lg py-5 px-6 mb-3 text-base text-cyan-700 inline-flex items-center"
                    role="alert"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="info-circle"
                        className="w-4 h-4 mr-2 fill-current"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                        ></path>
                    </svg>
                    Đăng xuất thành công
                </div>
            )}
            <div>
                <div className="pb-10">
                    <div
                        className="pt-40 bg-fixed relative bg-cover h-[32rem] bg-no-repeat bg-center text-right text-white"
                        style={{
                            backgroundImage: `url(${background})`,
                        }}
                    >
                        <h1 className="mr-56 font-cur text-7xl text-[#295F2D]">
                            Yến sào Song Ân
                        </h1>

                        <p className="mr-56 font-sans pl-[49rem] text-black font-[600] text-[18px]">
                            Nỗ lực hết mình vì sứ mệnh đem đến sản phẩm Yến Sào
                            chất lượng nhất cho người Việt
                        </p>
                    </div>
                </div>
                <div>
                    <div className="md:mx-48 md:my-10 mx-4 my-4">
                        <div className="font-medium md:text-3xl text-md md:mb-8 mb-5">
                            <FontAwesomeIcon icon={faFire} />
                            <span className="ml-4">Sản phẩm bán chạy</span>
                        </div>
                    </div>
                    <div className="px-48">
                        <Sale />
                    </div>
                </div>
                <div className="md:mx-48 md:my-20 md:mt-28 md:mb-4 mx-4 my-4">
                    <div className="font-medium md:text-3xl text-md md:mb-8 mb-5">
                        <FontAwesomeIcon icon={faBagShopping} />
                        <span className="ml-4">Yến sào</span>
                    </div>
                    <List inProductPage={false} />
                </div>
                <Link to="/production" onClick={() => window.scrollTo(0, 0)}>
                    <div className="flex justify-center mb-10">
                        <button className="w-fit bg-[#00ADB5] text-white py-2 px-8 rounded-[3px] text-base">
                            Xem thêm
                        </button>
                    </div>
                </Link>
            </div>
        </>
    );
};
