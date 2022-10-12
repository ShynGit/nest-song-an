import React from "react";
import { Link } from "react-router-dom";
import UserDropDown from "../UserDropDown/UserDropDown";
import { HeaderBottom } from "./HeaderBottom";

const Header = () => {
    return (
        <div className="fixed w-full z-10">
            <div className="flex justify-between bg-[#000000CC]/75 text-white my-0">
                <Link
                    to="/"
                    className="md:ml-[12%] flex items-center text-lg my-2"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <img
                        src="SongAnLogo.png"
                        style={{ filter: "brightness(0) invert(1)" }}
                        className="w-8 mr-2.5"
                    />
                    Song Ân
                </Link>
                <HeaderBottom />
                <div className="flex my-2">
                    <form className="md:w-96 w-36 my-auto mx-3">
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                className="border-2 focus:outline-none block p-3 pl-12 w-full text-sm text-gray-900 bg-gray-50 rounded-xl dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Tìm kiếm sản phẩm"
                                maxLength={150}
                                required
                            />
                        </div>
                    </form>
                </div>
                <div className="md:mr-[12%] flex items-center">
                    <UserDropDown />
                    <Link to="/shopping-cart">
                        <img
                            src="https://yensaokhanhhoa.vn/wp-content/themes/lifenestvietnam/images/icons/shopping-cart.svg"
                            className="w-[2.1rem] px-1 ml-1 hover:cursor-pointer"
                            style={{ filter: "brightness(0) invert(1)" }}
                            onClick={() => window.scrollTo(0, 0)}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
