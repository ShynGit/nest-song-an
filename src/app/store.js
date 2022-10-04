import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/production/filterSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
    },
});
