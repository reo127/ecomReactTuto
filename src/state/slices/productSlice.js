import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

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

export const addToCart = createAsyncThunk("cart", async (id) => {
    try {
        // const token = Cookies.get("token");
        const res = await axios.post(
            `http://localhost:8000/api/cart/${id}`,{},{
                withCredentials: true,
            }
        );
        console.log(res);
        return res.data;
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
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