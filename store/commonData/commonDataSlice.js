import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  categories: null,
  tags: null,
  levels: null,
  header: null,
  footer: null,
  glossaries: null,
  latest: null,
  blockchain: null,
  featured: null,
  essentials: null,
  security: null
};

export const commonDataSlice = createSlice({
  name: "commonData",
  initialState,
  reducers: {
    setCommonData(state, action) {
      state.categories = action.payload.categories;
      state.tags = action.payload.tags;
      state.levels = action.payload.levels;
      state.header = action.payload.header;
      state.footer = action.payload.footer;
      state.glossaries = action.payload.glossaries;
      state.latest = action.payload.latest;
      state.blockchain = action.payload.blockchain;
      state.featured = action.payload.featured;
      state.essentials = action.payload.essentials;
      state.security = action.payload.security;
    },
  },
});

export function shit() {}

export const { setCommonData } = commonDataSlice.actions;

export default commonDataSlice.reducer;
