import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  categories: null,
  tags: null,
  levels: null,
};

export const commonDataSlice = createSlice({
  name: "commonData",
  initialState,
  reducers: {
    setCommonData(state, action) {
      state.categories = action.payload.categories;
      state.tags = action.payload.tags;
      state.levels = action.payload.levels;
    },
  },
});

// console.log(commonDataSlice.actions.setCommonData, "aahh");

export function shit() {}

export const { setCommonData } = commonDataSlice.actions;

export default commonDataSlice.reducer;
