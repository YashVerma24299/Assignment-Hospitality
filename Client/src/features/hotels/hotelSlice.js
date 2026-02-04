import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoading: false,
  list: [],
  compare: JSON.parse(localStorage.getItem("compare")) || [],
  page: 0,
};

export const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },

    setHotels: (state, { payload }) => {
      state.list = payload;
    },

    // appendHotels: (state, { payload }) => {
    //   state.list = [...state.list, ...payload];
    //   state.page += 1;
    // },
    appendHotels: (state, { payload }) => {
  const existingIds = new Set(state.list.map(h => h.hotelId));

  const uniqueHotels = payload.filter(
    h => !existingIds.has(h.hotelId)
  );

  state.list = [...state.list, ...uniqueHotels];
  state.page += 1;},

    toggleCompare: (state, { payload }) => {
      if (state.compare.includes(payload)) {
        state.compare = state.compare.filter(i => i !== payload);
      } else {
        state.compare.push(payload);
      }

      localStorage.setItem("compare", JSON.stringify(state.compare));
    },

    resetHotels: () => initialState,
  },
});

export const {
  setLoading,
  setHotels,
  appendHotels,
  toggleCompare,
  resetHotels,
} = hotelSlice.actions;

export default hotelSlice.reducer;
