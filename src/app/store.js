import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/production/filterSlice";
import productReducer from "../features/production/productSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        user: userReducer,
        products: productReducer,
    },
});
