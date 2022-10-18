import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import UserIcon from "../../assets/icons/user.png";
import {
    selectUser,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
} from "../../features/user/userSlice";

const UserDropDown = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [userDropDown, setUserDropDown] = useState("hidden");

    const handleLogout = async () => {
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        dispatch(USER_LOGOUT_REQUEST());
        localStorage.removeItem("token");
        localStorage.removeItem("cart");
        await delay(500);
        dispatch(USER_LOGOUT_SUCCESS());
    };

    return (
        <>
            <div>
                <div
                    className="relative block text-left hover:cursor-pointer"
                    onMouseOver={() => setUserDropDown("inline")}
                    onMouseOut={() => setUserDropDown("hidden")}
                >
                    <img
                        src={UserIcon}
                        className="border-r px-1 w-10"
                        style={{ filter: "brightness(0) invert(1)" }}
                    />
                    <div
                        className={`${userDropDown} absolute right-0 z-10 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                        role="menu"
                        id="user-drop-down"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex={-1}
                    >
                        <div className="py-1" role="none">
                            <Link
                                to="/user"
                                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                Tài khoản
                            </Link>
                            <a
                                href="#"
                                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-1"
                            >
                                Đơn mua
                            </a>
                            {user.token ? (
                                <div
                                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-200"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-3"
                                    onClick={() => handleLogout()}
                                >
                                    Đăng xuất
                                </div>
                            ) : (
                                <Link
                                    to="/sign-in"
                                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-200"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-3"
                                >
                                    Đăng nhập
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDropDown;
