import { createSlice } from "@reduxjs/toolkit";

const favoritSlice = createSlice({
  name: "favorite",
  initialState: {
    favs: [],
  },
  reducers: {
    toogle(state, actions) {
      const found = state.favs.find((q) => q.id === actions.payload.id);
      if (found) {
        state.favs = state.favs.filter((q) => q.id !== actions.payload.id);
      } else {
        state.favs = [...state.favs, actions.payload];
      }
    },
  },
});

export const { toogle } = favoritSlice.actions;
export default favoritSlice.reducer;
