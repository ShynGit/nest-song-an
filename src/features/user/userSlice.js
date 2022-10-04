import {
    USER_LOGIN_FAIL,
    USER_SIGNUP_FAIL,
    USER_ADD_SESSION,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_GET_USER_INFO,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_UPDATE_USER_INFO,
    USER_TOKEN_HAS_EXPIRED,
    USER_PASSWORD_RESET_FAIL,
    USER_GET_USER_INFO_FAILED,
    USER_REMOVE_MESSAGE_STATE,
    USER_GET_USER_LIST_BY_PAGE,
    USER_PASSWORD_RESET_SUCCESS,
    USER_GET_USER_LIST_BY_PAGE_FAILED,
} from "../constants/userConstants";

import { createSlice } from "@reduxjs/toolkit";
import { getTokenDataFromLocalStorage } from "../../utils/serverUtils";

const initialState = {
    tokenData: getTokenDataFromLocalStorage(),
    userInfor: {
        id: "",
        fullName: "",
        address: "",
        phone: "",
    },
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        USER_LOGIN_REQUEST: (state) => {
            tokenData: getTokenDataFromLocalStorage();
            loading: true;
        },

        USER_LOGIN_SUCCESS: (state, action) => {
            loading: false;
            tokenData: action.payload;
            isloggedInSuccess: true;
        },

        USER_LOGIN_FAIL: (state, action) => {
            tokenData: null;
            loading: false;
            isloggedInSuccess: false;
            loginErrorMessage: action.payload;
        },
    },
});
