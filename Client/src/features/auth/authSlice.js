import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("currentUser")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, { payload }) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const exists = users.find(u => u.email === payload.email);
      if (exists) return;

      users.push(payload);
      localStorage.setItem("users", JSON.stringify(users));
    },

    login: (state, { payload }) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const match = users.find(
        u => u.email === payload.email && u.password === payload.password
      );

      if (!match) return;

      localStorage.setItem("currentUser", JSON.stringify(match));
      state.user = match;
    },

    logout: (state) => {
      localStorage.removeItem("currentUser");
      state.user = null;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
