import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  isLogin: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
  successMessage: "",
};

export const register = createAsyncThunk("registeruser", async (form) => {
  const res = await axios.post("http://localhost:8000/api/auth/signup", {
    name: form.name,
    email: form.email,
    password: form.password,
  });
  return res.data;
});

export const login = createAsyncThunk("loginuser", async (form) => {
  const res = await axios.post("http://localhost:8000/api/auth/signin", {
    email: form.email,
    password: form.password,
  });
  return res.data;
});

export const logout = createAsyncThunk("logoutuser", async () => {
  const res = await axios.post("http://localhost:8000/api/auth/logout");
  return res.data;
});


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      console.log("register exterareducer => ", action);
      state.user = action.payload.user;
      state.isLogin = false;
      state.successMessage = "Register Successfully";
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLogin = false;
      state.isError = true;
      state.errorMessage =
        action.error.message || "Something went wrong in registration";
      state.isLoading = false;
    });
    builder.addCase(register.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      console.log("login exterareducer => ", action);
      state.user = action.payload;
      state.isLogin = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLogin = false;
      state.isError = true;
      state.errorMessage =
        action.error.message || "Something went wrong in Login";
    });
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      console.log("logout exterareducer => ", action);
      state.user = {};
      state.isLogin = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLogin = false;
      state.isError = true;
      state.errorMessage =
        action.error.message || "Something went wrong in Logout";
    });
    builder.addCase(logout.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});
export const { setErrorMessage } = authSlice.actions;
export default authSlice.reducer;
