import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHotels } from "./hotelService";

export const loadHotels = createAsyncThunk(
  "hotels/load",
  async ({ city, page }) => fetchHotels(city, page)
);

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    list: [],
    compare: [],
    page: 0,
  },
  reducers: {
    toggleCompare: (state, action) => {
      const id = action.payload;
      state.compare.includes(id)
        ? state.compare = state.compare.filter(i => i !== id)
        : state.compare.push(id);
      localStorage.setItem("compare", JSON.stringify(state.compare));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadHotels.fulfilled, (state, action) => {
      state.list.push(...action.payload);
      state.page += 1;
    });
  },
});

export const { toggleCompare } = hotelSlice.actions;
export default hotelSlice.reducer;
