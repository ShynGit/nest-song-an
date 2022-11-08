import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        ORDER_LOADING: (state) => {
            state.loading = true;
        },
        ORDER_LOADING_SUCCESS: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        ORDER_LOADING_FAIL: (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload;
        },
        ORDER_CANCEL: (state, action) => {
            const index = state.data.findIndex(
                (bill) => bill.id === action.payload
            );
            state.data[index].status = 4;
            state.loading = false;
        },
        ORDER_CLEAR: (state) => {
            state.data = null;
        },
    },
});

export const {
    ORDER_LOADING,
    ORDER_LOADING_SUCCESS,
    ORDER_LOADING_FAIL,
    ORDER_CANCEL,
    ORDER_CLEAR,
} = orderSlice.actions;

export const selectOrder = (state) => state.order;

export default orderSlice.reducer;
