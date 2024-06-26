import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  initialState: false,
  name: "loginState",
  reducers: {
    login: (state) => true,
    logout: (state) => false,
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
