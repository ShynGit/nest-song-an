import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        CART_LOADING_REQUEST: (state) => {
            state.loading = true;
        },
        CART_LOADING_SUCCESS: (state, action) => {
            state.products = action.payload;
            state.loading = false;
        },
        CART_LOADING_FAIL: (state, action) => {
            state.cartErrorMessage = action.payload;
            state.products = [];
            state.loading = false;
        },
    },
});

export const { CART_LOADING_REQUEST, CART_LOADING_SUCCESS, CART_LOADING_FAIL } =
    cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
