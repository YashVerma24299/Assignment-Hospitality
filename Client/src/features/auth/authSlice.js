import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../supabaseClient";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const { data, error } =
      await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.session;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    session: JSON.parse(localStorage.getItem("session")) || null,
  },
  reducers: {
    logout: (state) => {
      supabase.auth.signOut();
      state.session = null;
      localStorage.removeItem("session");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.session = action.payload;
      localStorage.setItem("session", JSON.stringify(action.payload));
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
