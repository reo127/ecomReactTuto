import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    errorMessage: "",
};

export const getProducts = createAsyncThunk("products", async () => {
    const res = await axios.get("http://localhost:8000/api/products/getallproducts");
    return res.data;
});

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.errorMessage = action.error.message;
        });
    },
})

export default productSlice.reducer;