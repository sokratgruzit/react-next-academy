import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  categories: null,
  tags: null,
  levels: null,
};

export const commonDataSlice = createSlice({
  name: 'commonData',
  initialState,
  reducers: {
    setCommonData(state, action) {
      state.categories = action.payload.categories
      state.tags = action.payload.tags
      state.levels = action.payload.levels
    },
  },
});
  
export const {
  setCommonData,
} = statsSlice.actions

export default commonDataSlice.reducer
