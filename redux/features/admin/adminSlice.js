import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const AdminSlice = createSlice({
  name: "Admin",
  initialState,
  reducers: {},
});

export const { setToken, setUser } = AdminSlice.actions;

export default AdminSlice.reducer;
