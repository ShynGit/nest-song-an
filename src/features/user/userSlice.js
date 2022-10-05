import { createSlice } from "@reduxjs/toolkit";
import { getTokenDataFromLocalStorage } from "../../utils/serverUtils";

const initialState = {
    token: getTokenDataFromLocalStorage(),
    userInfor: {
        id: "",
        fullName: "",
        role: "",
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        USER_LOGIN_REQUEST: (state) => {
            state.token = getTokenDataFromLocalStorage();
            state.loading = true;
        },

        USER_LOGIN_SUCCESS: (state, action) => {
            state.token = action.payload;
            state.isloggedInSuccess = true;
            state.loading = false;
        },

        USER_LOGIN_FAIL: (state, action) => {
            state.token = null;
            state.isloggedInSuccess = false;
            state.loginErrorMessage = action.payload;
            state.loading = false;
        },
    },
});

export const { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST } =
    userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
