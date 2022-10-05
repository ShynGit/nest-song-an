import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/production/filterSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        user: userReducer,
    },
});
