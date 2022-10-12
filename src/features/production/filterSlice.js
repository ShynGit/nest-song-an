import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterWeight: [],
    highPrice: 50000000,
    lowPrice: 0,
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        FILTER_ADD: (state, action) => {
            state.filter.push(action.payload);
        },
        FILTER_REMOVE: (state, action) => {
            let index = state.filter.indexOf(action.payload);
            state.filter.splice(index, 1);
        },
    },
});

export const { FILTER_ADD, FILTER_REMOVE } = filterSlice.actions;

export const selectFilter = (state) => state.filter.filter;

export default filterSlice.reducer;
